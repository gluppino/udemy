// create secret number
var secretNumber = 4;
// ask user for guess
var guess = prompt("Guess a number");
// check guess

if (Number(guess) === secretNumber) {
    alert("You Got it RIGHT!!");
} else if (Number(guess) > secretNumber) {
    alert("TOO HIGH! Guess Again!")
} else {
    alert("too low! Guess Again!")
};

