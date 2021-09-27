
export function getCardPosition(stack, card) {
  return stack.indexOf(card);
}

export function doesStackIncludeCard(stack, card) {
  if (stack.indexOf(card) >= 0) {
    return true;
  } else {
    return false;
  }
}

export function isEachCardEven(stack) {
  return stack.every(x => !(x % 2));
}

export function doesStackIncludeOddCard(stack) {
  return stack.some(x => x % 2);
}

export function getFirstOddCard(stack) {
  return stack.find(x => x % 2);
}

export function getFirstEvenCardPosition(stack) {
  return stack.findIndex(x => !(x % 2));
}
