//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { numberLiteralTypeAnnotation } from "@babel/types";


export class ResistorColorTrio {
  constructor(...color) {
    this.color = color[0];
  }

 get label() {
  var cores = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
    }

  var valores = +('' + cores[this.color[0]] + cores[this.color[1]]);
  
  var math = 10**(cores[this.color[2]])*valores
  
  if (Number.isNaN(math)) throw new Error('invalid color');
  
  var b = "Resistor value: " + math + " ohms";
  var c = "Resistor value: " + (math/1000) + " kiloohms";
  var d = "Resistor value: " + (math/1000000) + " megaohms";
  var e = "Resistor value: " + (math/1000000000) + " gigaohms";

  if(math > 0 && math <= 999){
    return b;
  }

  if(math > 999 && math < 999999){
    return c;
  }

  if(math > 999999 && math < 999999999){
    return d;
  }

  if(math > 999999999){
    return e;
  }

  }
};
