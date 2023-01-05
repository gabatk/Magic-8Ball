const ball = document.querySelector('.billard-ball');
const ballImg = document.querySelector('.ball-img');
const input = document.querySelector('.question-input');
const errorField = document.querySelector('.error');
const answerField = document.querySelector('.answer');

const ballAnswer = [
	'Yes.',
	'No.',
	'Better ask me another question...',
	'Definitely no',
	'Probably yes',
	'Ask again later',
	'I am not able to answer now',
	'My sources say no',
];

const shakeBall = () => {
	ball.classList.add('shake-animation');
	setTimeout(() => {
		ball.classList.remove('shake-animation');
	}, 1000);
	showError();
};

ballImg.addEventListener('click', shakeBall);
