class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.cur = Math.round((this.min + this.max) / 2);
      return this.cur;
    }

    lower() {
      this.max = this.cur;
    }

    greater() {
      this.min = this.cur;
    }
}

module.exports = GuessingGame;
