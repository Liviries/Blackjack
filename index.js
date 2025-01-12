



let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let player = {
    name: "Liviries",
    chips: 4088
}
let cards = [];
let sum = 0
let message = ''
let hasBlackJack = false
let isAlive = true

playerEl.textContent = player.name + ': ' + player.chips + '$'


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
    hasBlackJack = false

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    sum = firstCard + secondCard
    cards =[firstCard, secondCard]

    renderGame()
}

function renderGame() {

    if (sum <= 20) {
        message = 'Do u want to draw a new card?'

    }  else if (sum === 21) {
        message = 'U won, blackjack!'
        hasBlackJack = true
        player.chips += 100

    }  else{
        message = 'U lost('
        isAlive = false
        player.chips -= 100
    }

    messageEl.textContent = message
    cardsEl.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++) {

        cardsEl.textContent += cards[i] + ' '

    }
    sumEl.textContent = 'Sum: ' + sum
    playerEl.textContent = player.name + ': ' + player.chips + '$'

    console.log('BlackJack?', hasBlackJack)
    console.log('Alive?', isAlive)
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {

        let newCard = getRandomCard();

        sum += newCard
        cards.push(newCard)

        renderGame()
    }
}
