//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  sideA;
  sideB;
  sideC;

  sides;

  constructor(...sides) {
    //lados do triângulo
    this.sideA = sides[0];
    this.sideB = sides[1];
    this.sideC = sides[2];
    this.sides - sides;
  }

  get isAllSidesGreaterThan0() {
    // Usando funções de array
    // this.sides.some(size => size === 0);
    return this.sideA > 0 && this.sideB > 0 && this.sideC > 0;
  }

  get isTriangleInequality() {
    //return ((this.sideA + this.sideB) >= this.sideC) || ((this.sideB + this.sideC) >= this.sideA) || ((this.sideC + this.sideA) >= this.sideB);

    const isBaseValidC = ((this.sideA + this.sideB) >= this.sideC);
    const isBaseValidA = ((this.sideB + this.sideC) >= this.sideA);
    const isBaseValidB = ((this.sideC + this.sideA) >= this.sideB);

    return isBaseValidA && isBaseValidB && isBaseValidC;
  }

  get isValidTriangle() {
   return this.isAllSidesGreaterThan0 && this.isTriangleInequality;
  }

  get isEquilateral() {
    const isSideAEqualsSideB = this.sideA === this.sideB;
    const isSideBEqualsSideC = this.sideB === this.sideC;

    return this.isValidTriangle && (isSideAEqualsSideB && isSideBEqualsSideC);
  }

  get isIsosceles() {
    const isSideAEqualsSideB = this.sideA === this.sideB;
    const isSideBEqualsSideC = this.sideB === this.sideC;
    const isSideAEqualsSideC = this.sideA === this.sideC;

    return this.isValidTriangle && (isSideAEqualsSideB || isSideAEqualsSideC || isSideBEqualsSideC);
  }

  get isScalene() {
    const isSideADifferentSideB = this.sideA !== this.sideB;
    const isSideBDifferentSideC = this.sideB !== this.sideC;
    const isSideADifferentSideC = this.sideA !== this.sideC;
    return this.isValidTriangle && (isSideADifferentSideB && isSideADifferentSideC && isSideBDifferentSideC);
  }
};
