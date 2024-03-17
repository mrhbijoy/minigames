d files with 9 a
let num = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let score = 0;

document
  .getElementById("guess-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("try").innerText =
      "You have tried " + (score += 1) + " times.";
    let num2 = document.getElementById("guess").value;
    if (guesses.includes(num2)) {
      document.getElementById("message").innerText =
        document.getElementById("message").innerText = "Too high, try again";
      } else if (num2 < num) {
        document.getElementById("message").innerText = "Too low, try again";
      }  else if (num2 == num) {
        document.getElementById("message").innerText =
          "Congratulations! You guessed the number";
      } else {
        score -= 1;
        document.getElementById("message").innerText = "Invalid input";
      }
    }
  });

document.getElementById("revealNumber").addEventListener("click", function () {
  alert("The secret number is " + num);
  score += 10;
});
