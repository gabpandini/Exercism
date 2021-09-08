export function getItem(cards, position) {
  var posicao = cards[position];
  return posicao;
}

export function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard); 
   return cards;
}

export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
    return cards;
}

export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

export function checkSizeOfStack(cards, stackSize) {
  let tamanho = cards.length
  if (tamanho == stackSize) { 
    return true; 
  } else {
    return false;
  }
}
