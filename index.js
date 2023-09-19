let timeRemaining = 10;
const timerElement = document.getElementById('timer');
const bodyElement = document.querySelector('body');
const formElement = document.querySelector('form');

function countdown() {
    timeRemaining = timeRemaining - 1;
    
    if (timeRemaining <= 0) {
        timerElement.style.cssText = `
        color: red;
        padding: 100px;
        margin: 100px;
        `
        bodyElement.style.backgroundColor = 'black';
        formElement.style.display = 'none';
        timerElement.innerText = 'KABOOM! TIME IS UP!';
    } else {
        timerElement.innerText = timeRemaining;
    }
}

setInterval(countdown, 1000);