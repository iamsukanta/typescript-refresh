var age = 20;
var myName = 'Sukanta';
var isFunctional = true;
if (isFunctional) {
    console.log(myName, 'myName ...');
}



function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function logMessage(message) {
    console.log(message);
};

window.addEventListener('resize', debounce(logMessage, 1000));