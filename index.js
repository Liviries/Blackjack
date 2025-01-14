



// let inGameMessageEl = document.getElementById("in-gameMessage-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let notificationEl = document.getElementById('notification-el');

let player = {
    name: "Liviries",
    chips: 4088
}
let cards = [];
let sum = 0
let message = ''
let hasBlackJack = false
let isAlive = false

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

    document.getElementById("start-btn").style.display = "none";
    document.getElementById('newCard-btn').style.display = 'block'
    document.getElementById('leaderBoard-btn').style.display = 'none'
    playerEl.style.display = 'none'
    sumEl.style.display = 'block'
    cardsEl.style.display = 'block'
    // inGameMessageEl.style.display = 'block'
    messageEl.style.display = 'none'
    renderGame()
}


function renderGame() {

    if (sum <= 20) {
        message = 'Do u want to draw a new card?'
        showNotification('Do u want to draw a new card?');

    }  else if (sum === 21) {
        message = 'You won, blackjack!'
        showNotification('You won, blackjack!');
        hasBlackJack = true
        player.chips += 100
        endGame()

    }  else{
        message = 'You lost('
        showNotification('You lost(');
        isAlive = false
        player.chips -= 50
        endGame()
    }

    // inGameMessageEl.textContent = message
    // messageEl.textContent = message

    cardsEl.textContent = 'Cards: '
    // for (let i = 0; i < cards.length; i++) {
    //
    //     cardsEl.textContent += cards[i] + ' '
    //
    // }


    for (let i = 0; i < cards.length; i++) {
        let cardImage = document.createElement('img');
        cardImage.src = `images/cards/card${cards[i]}.jpg`;
        cardImage.alt = `Card ${cards[i]}`;
        cardsEl.appendChild(cardImage);
    }


    sumEl.textContent = 'Sum: ' + sum
    playerEl.textContent = player.name + ': ' + player.chips + '$'

    // console.log('BlackJack?', hasBlackJack)
    // console.log('Alive?', isAlive)
}


function endGame() {

    document.getElementById('newCard-btn').style.display = 'none';
    document.getElementById('newGame-btn').style.display = 'block';
    document.getElementById('leaderBoard-btn').style.display = 'block';

}


function newCard() {

    if (isAlive === true && hasBlackJack === false) {

        let newCard = getRandomCard();

        sum += newCard
        cards.push(newCard)

        renderGame()
    }
}


function newGame() {

    cards = [];
    sum = 0;
    message = '';
    hasBlackJack = false;
    isAlive = false;


    messageEl.textContent = 'Would u like to play a round?';

    // inGameMessageEl.style.display = 'none'
    messageEl.style.display = 'block'
    playerEl.style.display = 'block'
    sumEl.style.display = 'none';
    cardsEl.style.display = 'none';
    document.getElementById('start-btn').style.display = 'block';
    document.getElementById('newGame-btn').style.display = 'none';
    notificationEl.classList.remove('show');
}


let leaderBoardData = [
    {name: "Liviries", chips: 4088},
    {name: "Svin", chips: 999},
    {name: "JSTR", chips: 2000},
    {name: "CLWN", chips: 888},
    {name: "00inf", chips: 0},
    {name: "Goofy", chips: 4088},
    {name: "Rio", chips: 123 },
    {name: "Bye :(", chips: 226},
    {name: "6", chips: 333},
    {name: "cartel cartel", chips: 233}
]

function leaderBoard() {
    // console.log("Opening Leader Board");

    notificationEl.classList.remove('show');
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('blackJack').style.display = 'none';

    document.getElementById('leaderBoard-container').style.display = 'block';
    document.getElementById('leaderBoard-table').style.display = 'block';

    let tableBody = document.getElementById('leaderBoard-body');              // Fill the table with data
    tableBody.innerHTML = '';

    leaderBoardData
        .sort((a, b) => b.chips - a.chips)  // Sort by chips
        .forEach((player, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.chips}$</td>
            `;
            tableBody.appendChild(row);
        });
}

function back() {

    document.getElementById('blackJack').style.display = 'block';
    document.getElementById('leaderBoard-container').style.display = 'none';

    document.getElementById('game-container').style.display = 'flex';
}

function showNotification(message, duration = 9000) {
    notificationEl.textContent = message;
    notificationEl.classList.add('show');

    setTimeout(() => {
        notificationEl.classList.remove('show');
    }, duration);
}

