const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const diesSound = new Audio('imagens/smb_mariodie.wav');
const playSound = new Audio('imagens/');
const overWolrdSound = new Audio('imagens/11a Overworld.mp3');
const jumpSound = new Audio('imagens/smb_jump-small.wav');

overWolrdSound.loop = true;

const jump = () => {

    overWolrdSound.play();
    jumpSound.play();
    
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump'); 
    }, 500);
};

const loop = setInterval(() => {

    let pipePosition = pipe.offsetLeft;
    let cloudsPosition = clouds.offsetLeft;
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    console.log(marioPosition);
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        overWolrdSound.pause();
        diesSound.play();

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = 'imagens/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';
    
        clearInterval(loop);
    };
}, 10);

document.addEventListener('keydown', jump);