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
	answerField.textContent = '';
	errorField.textContent = '';
	showError();
};

const showError = () => {
	if (input.value === '') {
		errorField.textContent = 'You have to ask a question';
	} else {
		if (!input.value.endsWith('?')) {
			errorField.textContent = 'The question must end with "?"';
		} else {
			showAnswer();
		}
	}
};

const showAnswer = () => {
	answerField.textContent =
		ballAnswer[Math.floor(Math.random() * ballAnswer.length)];
};

ballImg.addEventListener('click', shakeBall);
