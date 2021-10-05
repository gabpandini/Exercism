export class DiffieHellman {
  private readonly p: number;
  private readonly g: number;

  constructor(p: number, g: number) {
    const limite = Math.max(p, g);
    const primos = Array.from(this.generatePrimes(limite));
    if (!primos.includes(p) || !primos.includes(g)) {
      throw new Error ();
    }

    this.p = p;
    this.g = g;
  }

  private *generatePrimes(limit: number): Iterable<number> {
    var maybePrime = 3;
    var isPrime:number[] = [2];
    if (limit >= 2) {
      yield 2;
    }

    while (maybePrime <= limit) {
      if (isPrime.every(value => maybePrime % value != 0)) {
        isPrime.push(maybePrime);
        yield maybePrime;
      }
        maybePrime += 2;
    }
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error ('Invalid private key (must be lower than the parameter P).')
    } return this.g**privateKey % this.p;
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return theirPublicKey**myPrivateKey % this.p;
  }
}
