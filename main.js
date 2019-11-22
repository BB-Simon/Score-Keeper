const button1 = document.querySelector("#ctr1");
const player1s = document.querySelector("#score1");
var score1 = 0;

const button2 = document.querySelector("#ctr2");
const player2s = document.querySelector("#score2");
var score2 = 0;

const reset = document.querySelector("#reset");
const winner = document.querySelector("#winner");

button1.addEventListener("click", function() {
  const limit = document.querySelector("#limit").value;
  score1++;
  player1s.textContent = score1;

  if (score1 == limit || (score1 > score2 && score1 > limit)) {
    player1s.classList.add("green");
    button1.setAttribute("disabled", "true");
    button2.setAttribute("disabled", "true");

    printWinner();
  }
});

button2.addEventListener("click", function() {
  const limit = document.querySelector("#limit").value;
  score2++;
  player2s.textContent = score2;

  if (score2 == limit || (score2 > score1 && score2 > limit)) {
    player2s.classList.add("green");
    button1.setAttribute("disabled", "true");
    button2.setAttribute("disabled", "true");

    printWinner();
  }
});

reset.addEventListener("click", () => {
  button1.removeAttribute("disabled");
  button2.removeAttribute("disabled");

  player1s.classList.remove("green");
  player2s.classList.remove("green");

  score1 = 0;
  score2 = 0;

  player1s.textContent = score1;
  player2s.textContent = score2;

  document.querySelector("#limit").value = 5;
  winner.textContent = "";
});

function printWinner() {
  if (score1 > score2) {
    winner.textContent = "Player 1";
  } else {
    winner.textContent = "Player 2";
  }
}
