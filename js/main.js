const ball = document.querySelector('.billard-ball');
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
	setTimeout(showError, 1000);
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
	const answerText = ballAnswer[Math.floor(Math.random() * ballAnswer.length)];
	answerField.innerHTML = `<span>Answer: </span> ${answerText}`;
};

ball.addEventListener('click', shakeBall);
