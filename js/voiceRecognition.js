const elementGuessed = document.getElementById('guess');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    guess = event.results[0][0].transcript;
    showGuess(guess);
    verifyGuess(guess);
}

function showGuess(guess) {
    elementGuessed.innerHTML = `
    <div>Você disse</div>
    <span class="box">${guess}</span>
    `
}

recognition.addEventListener('end', () => recognition.start);