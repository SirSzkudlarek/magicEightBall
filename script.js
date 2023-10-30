const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const err = document.querySelector('.error');
const ball = document.querySelector('img');

const whipeInfo = () => {
  err.textContent = '';
  answer.textContent = '';

}

const randomAnswer = () => {
  const answerResults = [
    "Yes.",
    "No.",
    "Maybe.",
    "You don't wanna know..",
    "Never.",
    "Alwayes.",
  ];

  const random = Math.floor(Math.random() * answerResults.length);
  answer.textContent = `Answer: ${answerResults[random]}`;
}

const ballAnimation = () => {
  ball.classList.add('shake-animaton');
  setTimeout(checkQuestion, 1000);
}

const checkQuestion = () => {
  whipeInfo()
  if(input.value !== '' && input.value.slice(-1) === '?') {
    ball.classList.remove('shake-animaton');
    randomAnswer();
  } else if (input.value !== '' && input.value.slice(-1) !== '?') {
    ball.classList.remove('shake-animaton');
    err.textContent = 'Pytanie musi zawierać "?"';
  } else {
    ball.classList.remove('shake-animaton');
    err.textContent = 'Musisz zadać pytanie!';
  }
}


ball.addEventListener('click', ballAnimation);