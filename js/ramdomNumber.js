const minValue = 1;
const maxValue = 1000;
const secretNumber = randomNumber();

function startGame() {
    const secretNumber = randomNumber();
    const introText = document.getElementById('intro-text');
    const rangeText = document.getElementById('range-text');
    const playButton = document.getElementById('play-button');

    introText.style.display = 'none';
    rangeText.style.display = 'block';
    playButton.style.display = 'none';

    const minValueElement = document.getElementById('min-value');
    minValueElement.innerHTML = minValue;

    const maxValueElement = document.getElementById('max-value');
    maxValueElement.innerHTML = maxValue;
}

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', startGame);

function randomNumber() {
    return parseInt(Math.random() * maxValue + 1);
}


