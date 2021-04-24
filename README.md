# techdegree-project-4
## OOP Game Show App Completed 10 months ago

Live Version:  https://simonfeu.github.io/techdegree-project-4/

## Start window
![image](https://user-images.githubusercontent.com/63255333/115958837-7f105e80-a509-11eb-8685-ce557752256e.png)

## Game UI
![image](https://user-images.githubusercontent.com/63255333/115958862-94858880-a509-11eb-8feb-bd51064eb7c7.png)

## Won
![image](https://user-images.githubusercontent.com/63255333/115958919-d0205280-a509-11eb-8ce1-85998ffe218f.png)

## Lost
![image](https://user-images.githubusercontent.com/63255333/115958930-e0d0c880-a509-11eb-8406-74d5c0955075.png)


## About the Project
I created a browser-based, word guessing game called "Phrase Hunter." Therefore I use JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase. A player tries to guess the phrase by selecting individual letters from an onscreen keyboard. 

## Tech Stack / Techniques used

* JavaScript
* OOP (Object-Oriented Programming)
* CSS
* HTML

## Code Example
### Class "Game"
 * Class Game with a constructor which initializes a 'missed', a 'phrase' and a 'activePhrase' property.
 * Properies:
        - missed:   Integer and initialized with 0
        - phrases:  Array and initialized with an Array that is created by the 'createPhrase()' method
        - activePhrase: String which lateron hold one phrase out of the phrases array and now is initialized with 'null'
 
```javascript
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
```

### getRandomPhrase function
   * Creating a random phrase by creating a random number between 1 and the length of the 'phrase' array
   * The random number is used as 'index' number for the phrase array
   * At the end on phrase out of the array is returned
 
 ```javascript
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }
  ```
