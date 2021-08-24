//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  
  constructor(numero) {
    this.numero = numero;
  }

  get sumOfSquares() {
    let n = 0;
    var soma = 0;

    while (n <= this.numero) {
    
      soma += n**2;

      n++;
    }
    return soma;
  }

  get squareOfSum() {
    let soma = 0;
    for (let i = 1; i <= this.numero; i++) {
      soma += i
    }
    return soma ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
