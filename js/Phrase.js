/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/**
 * Class Phrase with a constructor which takes the parameter 'phrase' and initializes the 'phrase' property.
 * The passed parameter is converted to lowercase
 */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   * A regular expression is used to distinguish letters from spaces.
   * If there are letters, the class 'hide letter' is added, if there are spaces the class 'space' is added.
   */
  addPhraseToDisplay() {
    const letters = this.phrase;
    const reg = /[a-z]/;

    const ul = document.querySelector("#phrase ul");

    for (let i = 0; i < letters.length; i++) {
      if (reg.test(letters[i])) {
        const li = document.createElement("li");

        li.className = "hide letter " + letters[i];
        li.innerHTML = letters[i];
        ul.appendChild(li);
      } else {
        const li = document.createElement("li");
        li.className = "space";
        ul.appendChild(li);
      }
    }
  }

  /**
   * Checks if passed letter is in phrase
   * @param {string} letter - Letter to check
   * If letter is in phrase 'true' is returned else 'false' is returned
   */
  checkLetter(letter) {
    const phrase = this.phrase;
    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] == letter) {
        return true;
      }
    }
    return false;
  }

  /**
   * Display passed letter on screen after a match is found
   * @param {string} letter - Letter to display
   * Selecting all 'li' with a class that matches the letter
   * Changing the class Name to ("show letter " + letter) to change the backgroundColor and
     make the match visible in the gameboard.
   */
  showMatchedLetter(letter) {
    const letters = document.querySelectorAll("." + letter);
    for (let i = 0; i < letters.length; i++) {
      letters[i].className = "show letter " + letter;
    }
  }
}
