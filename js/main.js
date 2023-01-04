const ball = document.querySelector('.billard-ball');
const ballImg = document.querySelector('.ball-img');

const shakeBall = () => {
	ball.classList.add('shake-animation');
	};

const magicBall = () => {
    shakeBall();
    // ball.classList.remove('shake-animation');
}

ballImg.addEventListener('click', magicBall);
