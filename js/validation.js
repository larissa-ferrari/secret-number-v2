function verifyGuess(guess) {
    const number = +guess;

    if(isNaN(number)){
        elementGuessed.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (invalidNumber(number)){
        elementGuessed.innerHTML += `<div>Valor inválido: Fale um número entre ${minValue} e ${maxValue}</div>
        `
        return;
    }

    if(number === secretNumber) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${secretNumber}</h3>

        <button id="play-again" class="btn-play">Jogar novamente</button>
        `
    
    } else if (number > secretNumber) {
        elementGuessed.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-up-long"></i></div>`
    }
    else {
        elementGuessed.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
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
        window.location.reload;
    }
})
