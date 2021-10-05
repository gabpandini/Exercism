export class Squares {
  private readonly numbers: number[];
  
  constructor(count: number) {
    this.numbers = Array.from(this.generator(count));
  }

  private *generator(count: number): Iterable<number> {
    for (let item = 1; item <= count; item++) {
      yield item;
    }
  }

  get sumOfSquares(): number {
    return this.numbers.reduce((sum, value) => sum + value**2);
  }

  get squareOfSum(): number {
    return this.numbers.reduce((sum, value) => (sum + value))**2;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
