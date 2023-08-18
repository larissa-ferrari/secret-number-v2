const elementGuessed = document.getElementById('guess');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition;

function startRecognition() {
    recognition = new SpeechRecognition();
    recognition.lang = 'pt-Br';
    recognition.start();

    recognition.addEventListener('result', onSpeak);

    recognition.addEventListener('end', () => {
        recognition.start(); 
    });
}

function onSpeak(event) {
    guess = event.results[0][0].transcript;
    if (!isNaN(+guess)) {
        showGuess(guess);
        verifyGuess(guess);
    }
}

function showGuess(guess) {
    if (!isNaN(+guess)) {
        elementGuessed.innerHTML = `
            <div>Você disse</div>
            <div class="guessed-box">${guess}</div>
        `;
    }
}
