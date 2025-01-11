



let firstCard = 13
let secondCard = 8
let sum = firstCard + secondCard
let message = ''
let bJ = ''
let alive = ''

if (sum <= 20) {
    message = 'Do u want draw a new card?'
    bJ = false
    alive = true
}
else if (sum === 21) {
    message = 'Win!'
    bJ = true
    alive = true
}
else{
    message = 'lose('
    bJ = false
    alive = false
}

console.log(message)
console.log('BlackJack?', bJ)
console.log('Alive?', alive)
