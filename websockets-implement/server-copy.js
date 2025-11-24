const http = require('http');
const { type } = require('os');
const WebSocket = require('ws');

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Websocket server is running');
});

const wss = new WebSocket.Server({server});

function originIsNotAllowed(origin) {
    return true;
}

function heartbeat() {
    this.isAlive = true;
}

wss.on('connection', function connection(ws, req) {
    const origin = req.headers.origin;
    if (!originIsNotAllowed(origin)) {
        ws.close(1008, 'Origin is not allowed');
        return;
    }

    ws.isAlive = true;
    ws.on('pong', heartbeat)

    ws.id = Math.random().toString(36).slice(2, 9);

    console.log(`New Connection: ${ws.id}, Total connection size: ${wss.clients.size}`);
    ws.on('message', function incoming(data) {
        let msg;
        try {
            msg = JSON.parse(data.toString());
        } catch(error) {
            ws.send(JSON.stringify({ type: 'error', message: 'Invalid JSON'}));
            return;
        }

        switch(msg.type) {
            case 'chat':
                broadcast({
                    type: 'chat',
                    from: ws.id,
                    text: String(msg.text || '')
                })
                break;
            
            case 'ping':
                ws.send(JSON.stringify({ type: 'pong', timestamp: Date.now() }));
                break;
            
            default:
                ws.send(JSON.stringify({ type: 'error', message: 'Unknown message type' }));

        }
    });

    ws.on('close', (code, reason) => {
        console.log(`Client ${ws.id} disconnected (code=${code} reason=${reason})`);
    });

    ws.on('error', (err) => {
        console.error(`Client ${ws.id} error: ${err}`);
    });
}); 


function broadcast(payload) {
    const payload = JSON.stringify(payload);
    for(const client of wss.clients) {
        if(client.readyState === WebSocket.OPEN) {
            client.send(payload);
        }
    }
}

const interval = setInterval(function ping() {
    for(const ws of wss.clients) {
        if(ws.isAlive === false) {
            console.log(`Terminating unresponsive client: ${ws.id}`);
            return ws.terminate();
        }
        ws.isAlive = false;
        ws.ping(() => {});
    }
}, 30000);

wss.on('close', function close() {
    clearInterval(interval);
});

server.lesten(PORT, () => {
    console.log(`WebSocket server is running on ws://localhost:${PORT}`);       
});