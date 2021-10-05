function *generatePrimes(limit: number): Iterable<number> {
  var maybePrime = 3;
  var isPrime:number[] = [2];
  if (limit >= 1) {
    yield 2;
  }

  while (isPrime.length < limit) {
    if (isPrime.every(value => maybePrime % value != 0)) {
      isPrime.push(maybePrime);
      yield maybePrime;
    }
      maybePrime += 2;
  }
}

export function nth(numero: number): number {
  const primo =  Array.from(generatePrimes(numero)).pop();
  if (!primo) {
    throw new Error ('Prime is not possible')
  } else {
    return primo;
  }
}
