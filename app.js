let location1 = Math.floor(Math.random() * 5);
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let guesses = 0;
let hits = 0;
let isSunk = false;

while (!isSunk) {
  guess = prompt('Ready, aim, fire! (enter a number from 0 to 6):');
  if (guess < 0 || guess > 6) {
    alert('You entered invalid number!');
  } else {
    guesses++;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits++;
      alert('HIT!!!');
    } else {
      alert('MISS!!!');
    }
    if (hits >= 3) {
      isSunk = true;
      alert('You sank my battleship!!');
    }
  }
}

alert(
  `You took ${guesses} guesses to sunk the battleship, which means your shooting accuracy was ${
    3 / guesses
  }`
);
