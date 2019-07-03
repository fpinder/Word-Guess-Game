
//random letter generater 
function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
    
}

//display the initial values 
function start() {
    winsText.textContent = "Wins " + wins;
    lossesText.textContent = "Losses " + losses;
    GuessLeftText.textContent = "Guess Left " + GuessLeft;
    userChoiceText.textContent = "Your Guess so far " + Guesses.join(", ");
}
