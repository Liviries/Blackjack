



let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


let cards = [];
let sum = 0
let message = ''
let bJ = false
let isAlive = true

console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11

    } else if (randomNumber > 10) {
        return 10

    } else{
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    bJ = false

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    sum += firstCard + secondCard
    cards.push([firstCard, secondCard])

    renderGame()
}

function renderGame() {

    if (sum <= 20) {
        message = 'Do u want to draw a new card?'

    }  else if (sum === 21) {
        message = 'U won, blackjack!'
        bJ = true

    }  else{
        message = 'U lost('
        isAlive = false
    }

    messageEl.textContent = message
    cardsEl.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++) {

        cardsEl.textContent += cards[i] + ' '

    }
    sumEl.textContent = 'Sum: ' + sum


    console.log('BlackJack?', bJ)
    console.log('isAlive?', isAlive)
}

function newCard() {
    let newCard = getRandomCard();

    sum += newCard
    cards.push(newCard)

    renderGame()
}

