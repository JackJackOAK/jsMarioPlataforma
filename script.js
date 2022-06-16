const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const restart = document.querySelector('.restart');

const diesSound = new Audio('imagens/smb_mariodie.wav');
const playSound = new Audio('imagens/');
const overWolrdSound = new Audio('imagens/11a Overworld.mp3');
const jumpSound = new Audio('imagens/smb_jump-small.wav');

const scoreMold = document.querySelector('.score');

let score = 0;

const jump = () => {

    jumpSound.play();
    
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump'); 
    }, 500);
};

const loop = setInterval(() => {

    let cloudsPosition = clouds.offsetLeft;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        overWolrdSound.pause();
        diesSound.play(); 

        restart.style.display = 'flex';

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = 'imagens/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '10px';
    
        clearInterval(loop);
        clearInterval(scoreCount);
        clearInterval(obstacle);
        clearInterval(playMusic);
    };

}, 10);

const scoreCount = setInterval(() => {

        score++;
        scoreMold.innerHTML = parseInt(score);

}, 1500);

const playMusic = setInterval(() => {
    overWolrdSound.play();
    overWolrdSound.loop = true;
}, 500);

const obstacle = setInterval(() => {

    img = Math.floor(Math.random() * 3);

    if(img == 0) {
        pipe.src = 'imagens/2.png';
    } else {
        pipe.src = 'imagens/' + img + '.webp';
    };

}, 1500);

function reloadGame() {
    location.reload();
}

document.addEventListener('keydown', (k) => { 
    if(k.keyCode == 32) { 
        jump();
    } else if (k.keyCode == 82) {
        reloadGame();
    };
});

