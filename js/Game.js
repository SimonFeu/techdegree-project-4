/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**
 * Class Game with a constructor which initializes a 'missed', a 'phrase' and a 'activePhrase' property.
 * Properies:
        - missed:   Integer and initialized with 0
        - phrases:  Array and initialized with an Array that is created by the 'createPhrase()' method
        - activePhrase: String which lateron hold one phrase out of the phrases array and now is initialized with 'null'
 */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const phrases = [
      new Phrase("Hasta la vista"),
      new Phrase("The stuff that dreams are made of"),
      new Phrase("Carpe diem"),
      new Phrase("There is no place like home"),
      new Phrase("Nobody is perfect")
    ];
    return phrases;
  }

  /**
   * Creating a random phrase by creating a random number between 1 and the length of the 'phrase' array
   * The random number is used as 'index' number for the phrase array
   * At the end on phrase out of the array is returned
   */
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  /**
   * Hiding the div with the id "overlay"
   * Beginns game by selecting a random phrase and displaying it to user
   */
  startGame() {
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param {HTMLButtonElement} button - The clicked button element
   * Disables the clicket button
   * Gets the innerHTML out of the button (this is the "letter")
   * Checks with the checkLetter() method if the lettes is included in the activePhrase.
   * If it's includede:
        - the button class is set to "chosen"
        - the letter is shown on the board. This is done with the showMatchedLetter() method
        - checking if the game is won with checkForWin() method and if its won calling the gameOver() method
          and passing the parameter "true" to show the win message on screen  
    * If it's not includede:
        - the button class is set to "wrong"
        - the removeLife() method is called
   */
  handleInteraction(button) {
    button.disabled = true;
    const letter = button.innerHTML;
    const phrase = this.activePhrase;

    if (phrase.checkLetter(letter)) {
      button.className = "chosen";
      phrase.showMatchedLetter(letter);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {
      button.className = "wrong";
      this.removeLife();
    }
  }

  /**
   * checks for winning move. If all 'li' elements have a class which is unlike 'hide' the game is won.
   * If there is at least one 'li' element with the class 'hide' the game isn't won at the moment.
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const letters = document.querySelectorAll("#phrase ul li");
    for (let i = 0; i < letters.length; i++) {
      let letterClass = letters[i].className;
      if (letterClass.includes("hide")) {
        return false;
      }
    }
    return true;
  }

  /**
   * Increases the value of the missed property
   * Calculates the "remainingLives" by subtracting "missed" from "lives"
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player runs out of hearts
   */
  removeLife() {
    const heart = document.querySelectorAll("#scoreboard ol li img");
    const lives = heart.length;
    const remainingLives = lives - this.missed;

    if (remainingLives == 1) {
      /**
       * Calling the gameOver() method and inserting the parameter "false".
       * Because of the parameter "false" the losing message will appear
       */
      this.gameOver(false);
    } else {
      /**
       * when changing the heart images we always have to subtract one from 
         the remaining life, because the index of the array where the images 
         are located already starts at 0 while the hearts start counting from 1
      */
      heart[remainingLives - 1].src = "images/lostHeart.png";
    }
    this.missed += 1;
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Wether or not the user won the game
   * If the game is won we pass "true" for the parameter "gameWon".
   *If the game is lost we pass "false" for the parameter "gameWon".
   */
  gameOver(gameWon) {
    const overlay = document.querySelector("#overlay");
    const message = document.querySelector("#game-over-message");
    overlay.style.display = "";

    // Removing all 'li' elements from the Phrase 'ul' element
    const ul = document.querySelector("#phrase ul");
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }

    //Enable all keys and set them to 'key' CSS class
    const buttons = document.querySelectorAll(".keyrow button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
      buttons[i].className = "key";
    }

    //Resetting all hearts imgages to "liveHeart.png"
    const heart = document.querySelectorAll("#scoreboard ol li img");
    for (let i = 0; i < heart.length; i++) {
      heart[i].src = "images/liveHeart.png";
    }

    //Checking if game is won or lost and displaying the according message and background color
    if (gameWon) {
      overlay.className = "win";
      message.innerHTML = "Wohooooo :) you won.";
    } else {
      overlay.className = "lose";
      message.innerHTML = "Ohhh you lost :(";
    }
  }
}
