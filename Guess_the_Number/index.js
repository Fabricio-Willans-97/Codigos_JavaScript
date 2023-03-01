let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function init() {
    computerNumber = Math.floor(Math.random() * 101)
    //console.log(computerNumber);
}

function newGame() {
    window.location.reload()
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if (attempts < maxGuesses) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = `Seu numero esta abaixo`
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = `Seu numero esta acima`
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        else {
            document.getElementById('textOutput').innerHTML = `Acertou mizeravi!!!`
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }
    else {
        document.getElementById('textOutput').innerHTML = `GAME OVER! Seu número era ${computerNumber}`
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
}