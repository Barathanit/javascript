//create secretNumber
var secretNumber = 7;

//ask user for guess
var guess = prompt("guess a number");

//check if guess is right
if(Number(guess)=== secretNumber) {
    alert("you got it");
}
// check if guess is higher
else if (Number(guess) > secretNumber) {
    alert("too high");
}
// check if guess is low
else if (Number(guess) < secretNumber) {
    alert("too low");
}