
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let firstCard = 5
let secondCard = 8
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard
let message = ''
let bJ = ''
let alive = ''

function startGame() {
    renderGame()
}

function renderGame() {

    if (sum <= 20) {
        message = 'Do u want to draw a new card?'
        bJ = false
        alive = true
    }  else if (sum === 21) {
        message = 'U won, blackjack!'
        bJ = true
        alive = true
    }  else{
        message = 'U lost('
        bJ = false
        alive = false
    }

    messageEl.textContent = message
    cardsEl.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++) {

        cardsEl.textContent += cards[i] + ' '

    }
    sumEl.textContent = 'Sum: ' + sum


    console.log('BlackJack?', bJ)
    console.log('Alive?', alive)
}

function newCard() {
    let newCard = 8
    sum += newCard
    cards.push(newCard)
    renderGame()
}

