class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.cur = Math.round((this.min + this.max) / 2); //Math.floor, see the note below
    return this.max == 1 ? 0 : this.cur; // without extra check Math.round will never find 0
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
Exactly the solution with Math.round and without reducing the range passes all the tests.
But I think that the more common solution with Math.floor and range reduction is more optimal, because:
1) there is no need to add an additional check to find 0;
2) it finds the number faster more often (+ some numbers it finds much faster).
See: https://replit.com/@joyscript/Binary-Search#index.js
*/