let body = document.getElementById("body");
let element = document.createElement("div");
let score = 0;
element.innerText = "Hello";
element.style.position = "absolute";
element.style.left = "50%";
element.style.top = "50%";
body.appendChild(element);

setInterval(() => {
    element.style.left = Math.random() * window.innerWidth + "px";
    element.style.top = Math.random() * window.innerHeight + "px";
}, 2000);

element.addEventListener("click", () => {
    score++;
    console.log("Score: " + score);
})