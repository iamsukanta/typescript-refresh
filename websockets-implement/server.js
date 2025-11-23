// server.js
const http = require('http');
const WebSocket = require('ws');

const PORT = 8080;

// Optional: create an HTTP server so you can host an index.html or upgrade to wss later
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('WebSocket server is running\n');
});

const wss = new WebSocket.Server({ server });

// Simple origin check (adjust to your allowed origins)
function originIsAllowed(origin) {
  // For local testing, allow all or check origin === 'http://localhost:3000'
  return true;
}

// Heartbeat helper - mark alive clients
function noop() {}

function heartbeat() {
  this.isAlive = true;
}

wss.on('connection', function connection(ws, req) {
  // Basic origin check
  const origin = req.headers.origin;
  if (!originIsAllowed(origin)) {
    ws.close(1008, 'Origin not allowed');
    return;
  }

  ws.isAlive = true;
  ws.on('pong', heartbeat);

  // Assign a simple id (for demo only)
  ws.id = Math.random().toString(36).slice(2, 9);

  console.log(`Client connected: ${ws.id} (total: ${wss.clients.size})`);

  // Send a welcome message
  ws.send(JSON.stringify({ type: 'welcome', id: ws.id, message: 'Welcome!' }));

  ws.on('message', function incoming(data) {
    // Expecting JSON text messages
    let msg;
    try {
      msg = JSON.parse(data.toString());
    } catch (err) {
      // If not JSON, echo raw
      ws.send(JSON.stringify({ type: 'error', message: 'Invalid JSON' }));
      return;
    }

    // Example: handle different message types
    switch (msg.type) {
      case 'chat':
        // Broadcast chat messages
        broadcast({
          type: 'chat',
          from: ws.id,
          text: String(msg.text || '')
        });
        break;

      case 'ping':
        ws.send(JSON.stringify({ type: 'pong', ts: Date.now() }));
        break;

      default:
        ws.send(JSON.stringify({ type: 'error', message: 'Unknown message type' }));
    }
  });

  ws.on('close', (code, reason) => {
    console.log(`Client ${ws.id} disconnected (code=${code} reason=${reason})`);
  });

  ws.on('error', (err) => {
    console.error(`Client ${ws.id} error:`, err.message);
  });
});

// Broadcast helper (send to all connected clients)
function broadcast(payload) {
  const json = JSON.stringify(payload);
  for (const client of wss.clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(json);
    }
  }
}

// Periodic ping to detect dead connections (every 30s)
const interval = setInterval(() => {
  for (const ws of wss.clients) {
    if (ws.isAlive === false) {
      console.log(`Terminating dead connection: ${ws.id}`);
      return ws.terminate();
    }

    ws.isAlive = false;
    ws.ping(noop);
  }
}, 30000);

// Clean up on server close
wss.on('close', function close() {
  clearInterval(interval);
});

server.listen(PORT, () => {
  console.log(`HTTP/WebSocket server listening on http://localhost:${PORT}`);
});
