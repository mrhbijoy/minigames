let num = Math.floor(Math.random() * 100) + 1;
let guesses = [];

document.getElementById('submitGuess').addEventListener('click', function() {
    let num2 = document.getElementById('guess').value;
    if(guesses.includes(num2)){
        document.getElementById('message').innerText = "You already guessed that number";
    } else {
        guesses.push(num2);
        document.getElementById('guessesMade').innerText = "Your guesses: " + guesses.join(', ');
        if(num2 > num){
            document.getElementById('message').innerText = "Too high, try again";
        } else if(num2 < num){
            document.getElementById('message').innerText = "Too low, try again";
        } else {
            document.getElementById('message').innerText = "Congratulations! You guessed the number";
        }
    }
});