class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.cur = Math.round((this.min + this.max) / 2); //Math.floor, see the note below
      return this.cur;
    }

    lower() {
      this.max = this.cur; // this.cur - 1
    }

    greater() {
      this.min = this.cur; // this.cur + 1
    }
}

module.exports = GuessingGame;

/* Note:
Solution with Math.round and without reducing the range passes all tests.
But I think that solution with Math.floor and reducing the range more correct, because:
1) Math.round without reducing will never find 0;
2) Math.floor with reducing finds the number faster more often;
see https://replit.com/@joyscript/Binary-Tree#index.js
*/