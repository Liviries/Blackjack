
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let firstCard = 13
let secondCard = 8
let sum = firstCard + secondCard
let message = ''
let bJ = ''
let alive = ''

function startGame() {

    if (sum <= 20) {
        message = 'Do u want draw a new card?'
        bJ = false
        alive = true
    }  else if (sum === 21) {
        message = 'Win!'
        bJ = true
        alive = true
    }  else{
        message = 'lose('
        bJ = false
        alive = false
    }

    messageEl.textContent = message
    cardsEl.textContent = 'Cards: ' + firstCard + ', ' + secondCard
    sumEl.textContent = 'Sum: ' + sum


    console.log('BlackJack?', bJ)
    console.log('Alive?', alive)
}

