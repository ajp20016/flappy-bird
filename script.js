const bird = document.getElementById('bird');
const pipe = document.getElementById('pipe');

let birdTop = 220;
let pipeLeft = 400;

function jump() {
    if (birdTop > 0) {
        birdTop -= 50;
        bird.style.top = birdTop + 'px';
    }
}

function gameLoop() {
    birdTop += 5;
    pipeLeft -= 5;

    bird.style.top = birdTop + 'px';
    pipe.style.left = pipeLeft + 'px';

    if (birdTop > 500 || (pipeLeft < 100 && pipeLeft > 0 && (birdTop < 300 || birdTop > 400))) {
        alert('Game over!');
        birdTop = 220;
        pipeLeft = 400;
    }

    if (pipeLeft <= -50) {
        pipeLeft = 400;
    }

    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', jump);

gameLoop();
