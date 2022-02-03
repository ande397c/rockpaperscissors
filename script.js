"use scrict";

// Player chooses rock, paper or scissors
document.querySelector(".rock").addEventListener("click", chooseRock);
document.querySelector(".paper").addEventListener("click", choosePaper);
document.querySelector(".scissors").addEventListener("click", chooseScissors);

// Have the program select either rock, paper or scissors

const options = ["rock", "paper", "scissors"];

const random = Math.floor(Math.random() * options.length);

// Selection is saved as a variable

const playerOneOutput = (random, options[random]);

console.log(random);

console.log(playerOneOutput);

function chooseRock() {
  console.log("you have selected rock");
  document.querySelector("#player1").classList.add("player", "shake");
  document.querySelector("#player2").classList.add("player", "shake");

  document.querySelector("#player1").addEventListener("animationend", showHandsRock);
  document.querySelector("#player2").addEventListener("animationend", showHandsRock);
}

function choosePaper() {
  console.log("you have selected paper");
  document.querySelector("#player1").classList.add("player", "shake");
  document.querySelector("#player2").classList.add("player", "shake");

  document.querySelector("#player1").addEventListener("animationend", showHandsPaper);
  document.querySelector("#player2").addEventListener("animationend", showHandsPaper);
}

function chooseScissors() {
  console.log("you have selected scissors");
  document.querySelector("#player1").classList.add("player", "shake");
  document.querySelector("#player2").classList.add("player", "shake");

  document.querySelector("#player1").addEventListener("animationend", showHandsScissors);
  document.querySelector("#player2").addEventListener("animationend", showHandsScissors);
}

// Inspiration:
// https://sebhastian.com/rock-paper-scissors-javascript/

function showHandsRock() {
  // console.log("showHandsRock");
  document.querySelector("#player2").style.backgroundImage = "url(hand_rock.png)";

  // If statements  that determine if program should show rock, paper or scissors.

  if (playerOneOutput == options[0]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_rock.png)";
  } else if (playerOneOutput == options[1]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_paper.png)";
  } else if (playerOneOutput == options[2]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_scissors.png)";
  }

  if (playerOneOutput == options[0]) {
    console.log("that's a draw");
    document.querySelector("#draw").classList.remove("hidden");
  }
  if (playerOneOutput == options[1]) {
    console.log("You lose");
    document.querySelector("#lose").classList.remove("hidden");
  } else if (playerOneOutput == options[2]) {
    console.log("You win");
    document.querySelector("#win").classList.remove("hidden");
  }

  // Reload page when user clicks on screen
  window.addEventListener("click", () => {
    location.reload();
  });
}

function showHandsPaper() {
  // console.log("showHandsPaper");
  document.querySelector("#player2").style.backgroundImage = "url(hand_paper.png)";

  // If statements  that determine if program should show rock, paper or scissors.

  if (playerOneOutput == options[0]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_rock.png)";
  } else if (playerOneOutput == options[1]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_paper.png)";
  } else if (playerOneOutput == options[2]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_scissors.png)";
  }

  if (playerOneOutput == options[0]) {
    console.log("You win");
    document.querySelector("#win").classList.remove("hidden");
  }
  if (playerOneOutput == options[1]) {
    console.log("that's a draw");
    document.querySelector("#draw").classList.remove("hidden");
  } else if (playerOneOutput == options[2]) {
    console.log("You lose");
    document.querySelector("#lose").classList.remove("hidden");
  }

  // Reload page when user clicks on screen
  window.addEventListener("click", () => {
    location.reload();
  });
}

function showHandsScissors() {
  // console.log("showHandsScissors");
  document.querySelector("#player2").style.backgroundImage = "url(hand_scissors.png)";

  // If statements that determine if program should show rock, paper or scissors.

  if (playerOneOutput == options[0]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_rock.png)";
  } else if (playerOneOutput == options[1]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_paper.png)";
  } else if (playerOneOutput == options[2]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_scissors.png)";
  }

  if (playerOneOutput == options[0]) {
    console.log("You lose");
    document.querySelector("#lose").classList.remove("hidden");
  }
  if (playerOneOutput == options[1]) {
    console.log("You win");
    document.querySelector("#win").classList.remove("hidden");
  } else if (playerOneOutput == options[2]) {
    console.log("that's a draw");
    document.querySelector("#draw").classList.remove("hidden");
  }

  // Reload page when user clicks on screen
  window.addEventListener("click", () => {
    location.reload();
  });
}
