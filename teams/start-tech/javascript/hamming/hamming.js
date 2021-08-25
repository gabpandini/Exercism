//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (esquerda, direita) => {
let hamming = 0;

  if (esquerda === direita) {
    return 0; 
  }

  else if (esquerda === '') {
    throw new Error('left strand must not be empty');
  }
  
  else if (direita === '') {
    throw new Error('right strand must not be empty');
  }

  else if (direita.length !== esquerda.length) {
    throw new Error('left and right strands must be of equal length');
  }

  else {
  for (let index = 0; index < esquerda.length; index++) {
    if (esquerda[index] !== direita[index]){

    hamming++
    }
  }
  return hamming
  }
};
