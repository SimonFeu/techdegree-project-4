/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Creating a Variable which later on hold the created game object
 * Selecting the "Start Game" button
 */
let game;
const startButton = document.querySelector("#btn__reset");

/**
 * Adding a click listener to teh "Start Game" Button, which create a new game object and
   calls the startGame() method.
 */
startButton.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

/**
 * Selecting the div element which is the parent element of the keyboard-buttons.
 * The event listener will listen to clicks on this div-element.
 * To make sure that the handler does not react to a click in the space between the buttons,
 * an if condition is set which is only true if the clicked element is a button with the class "key"
 */

const qwerty = document.querySelector("#qwerty");

qwerty.addEventListener("click", e => {
  const button = e.target;
  if (button.className == "key") {
    game.handleInteraction(button);
  }
});
