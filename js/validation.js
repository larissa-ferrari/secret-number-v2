const textContainer = document.querySelector('.text-container');

function verifyGuess(guess) {
    const number = +guess;

    if (invalidNumber(number)){
        elementGuessed.innerHTML += `<div>Valor inválido</div>`
        return;
    }

    if (number === secretNumber) {
        textContainer.innerHTML = `
        <div class="final-message">
            <h2 class="text">Você acertou!</h2>
            <h3 class="text">O número secreto era ${secretNumber}</h3>
            <button id="play-again" class="custom-button">Jogar novamente</button>
        </div>
    `;
    
    } else if (number > secretNumber) {
        elementGuessed.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    } else {
        elementGuessed.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    }
}

function isNaN(number) {
    return Number.isNaN(number);
}

function invalidNumber(number) {
    return number > maxValue || number < minValue
}

document.body.addEventListener('click', event => {
    if(event.target.id == 'play-again') {
        window.location.reload();
    }
})
