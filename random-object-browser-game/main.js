    const playBtn = document.getElementById('playButton');
    const pauseBtn = document.getElementById('pauseButton');
    const resetBtn = document.getElementById('resetButton');
    const box = document.getElementById('box');
    const obj = document.getElementById('obj');
    let score = 0;
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.innerText = `Score: ${score}`;

    let moveInterval = null;

    function moveObjectRandomly() {
        // Get box dimensions
        const boxRect = box.getBoundingClientRect();

        // Get object dimensions
        const objRect = obj.getBoundingClientRect();

        // Calculate random position within the box boundaries
        const maxLeft = boxRect.width - objRect.width;
        const maxTop = boxRect.height - objRect.height;

        const randomLeft = Math.random() * maxLeft;
        const randomTop = Math.random() * maxTop;

        // Apply new position
        obj.style.left = `${randomLeft}px`;
        obj.style.top = `${randomTop}px`;
    }

    playBtn.addEventListener('click', () => {
        // prevent multiple intervals
        if (moveInterval) clearInterval(moveInterval);
        moveObjectRandomly();
        moveInterval = setInterval(moveObjectRandomly, 2000);
    });

    pauseBtn.addEventListener('click', () => {
        clearInterval(moveInterval);
    });

    resetBtn.addEventListener('click', () => {
        score = 0;
        scoreDisplay.innerText = `Score: ${score}`;
        clearInterval(moveInterval);
    });

    // Handle object click
    obj.addEventListener('click', () => {
        score += 1;
        scoreDisplay.innerText = `Score: ${score}`;
    });