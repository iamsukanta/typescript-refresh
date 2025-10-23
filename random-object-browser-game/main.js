let objContainer = document.getElementById("objectContainer");
let scoreBoard = document.createElement("p");
scoreBoard.innerText = "Score: 0";
let element = document.createElement("div");
let score = 0;
element.innerText = "Hello";
element.style.position = "absolute";
element.style.left = "50%";
element.style.top = "50%";
objContainer.appendChild(element);
objContainer.appendChild(scoreBoard);

setInterval(() => {
    element.style.left = (Math.random() * window.innerWidth - 20) + "px";
    element.style.top = (Math.random() * window.innerHeight - 80) + "px";
}, 2000);

// moving object in a definite area not whole screen
// setInterval(() => {

element.addEventListener("click", () => {
    score++;
    scoreBoard.innerText = "Score: " + score;
});