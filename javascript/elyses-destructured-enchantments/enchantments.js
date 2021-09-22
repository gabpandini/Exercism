//utilizando destructuring assignment para resolver
export function getFirstCard([a, ...deck]) {  
  return a;
}

export function getSecondCard([a, b, ...deck]) { //a = primeira carta do baralho, b = segunda ...
  return b;
}

export function swapTopTwoCards([a, b, ...deck]) {
    return [b, a, ...deck];
}

export function discardTopCard([a, ...deck]) {
  return [a, deck];
}

const FACE_CARDS = ['jack', 'queen', 'king'];

export function insertFaceCards([a, ...deck]) {
  return [a, 'jack', 'queen', 'king', ...deck];
}
