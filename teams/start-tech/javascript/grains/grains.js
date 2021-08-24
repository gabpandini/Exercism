/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const square = (quadrado) => {
  if (quadrado <= 0 || quadrado > 64) {

    throw new Error("square must be between 1 and 64");
  }

  let n = quadrado - 1;
  var graos = BigInt(2**n);

  return graos;

};

export const total = () => {
  var soma = BigInt(0);
  for (let n = 0; n < 64; n++) {
 
  soma = soma + BigInt(2**n);
  }
  return soma;
};