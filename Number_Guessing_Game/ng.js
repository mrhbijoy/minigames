d files with 9 a
let num = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let score = 0;

document
  .getElementById("guess-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let num2 = document.getElementById("guess").value;
    if (guesses.includes(num2)) {
      document.getElementById("message").innerText =
        "You have already guessed that number";
    } else if (num2 > num) {
      document.getElementById("message").innerText = "Too high, try again";
    } else if (num2 < num) {
      document.getElementById("message").innerText = "Too low, try again";
    } else if (num2 == num) {
      document.getElementById("message").innerText =
        "Congratulations! You guessed the number";
    }
    guesses.push(num2);
    document.getElementById("guessesMade").innerText =
      "Already guessed: " + guesses.join(", ");
    score += 1;
    document.getElementById("try").innerText =
      "You have tried " + score + " times.";
  });

  document.getElementById('revealNumber').addEventListener('click', function() {
    alert('The secret number is ' + num);
    score += 10;
    document.getElementById("try").innerText = "You have tried " + score + " times.";
});
