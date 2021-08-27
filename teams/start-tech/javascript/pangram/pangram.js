//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (frase) => {
  if (frase === '') return false;
  
  //const fraseMinuscula = frase.toLowerCase();
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  const chars = frase.toLowerCase().split("");
  /*
  for (let index = 0; index < frasePronta.length; index++) {
  let resultado = {};
  for (const frases of fraseMinuscula){
    resultado[frases] !== alfabeto;

  }
  return true;
  */

  for (let letras of alfabeto) {
    if (!chars.includes(letras)) {
      return false;
    }
  }
  return true;

};
