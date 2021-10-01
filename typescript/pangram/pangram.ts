export function isPangram(frase: string): boolean {
  const filtrado = frase.toUpperCase().split('').filter(char => char >= 'A' && char <= 'Z');
  const setFiltrado = new Set(filtrado);
  return setFiltrado.size == 26;
}
