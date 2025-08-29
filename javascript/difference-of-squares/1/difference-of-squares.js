export class Squares {
  constructor(n) {
    this._sumOfSquares = n * (n + 1) * (2 * n + 1) / 6;
    this._squareOfSum = ((n * (n + 1)) / 2)**2;
    this._difference = this._squareOfSum - this._sumOfSquares;
  }

  get sumOfSquares() {
    return this._sumOfSquares;
  }

  get squareOfSum() {
    return this._squareOfSum;
  }

  get difference() {
    return this._difference;
  }
}
