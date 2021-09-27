
export function cardTypeCheck(stack, card) {
  const newStack = {};
  stack.forEach(element => newStack[element] = (element in newStack)? newStack[element] +1 : 1); 
  return newStack[card] ?? 0;
}

export function determineOddEvenCards(stack, type) { 
    let typeCard = {true : 0, false : 0};
    stack.forEach(x => typeCard[!(x % 2)]++);

    return typeCard[type];

}
