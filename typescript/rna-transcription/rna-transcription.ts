type DnaBase = keyof typeof DnaBasis;

enum DnaBasis {
  G = 'C',
  C = 'G',
  T = 'A',
  A = 'U',
}

export function toRna(DNA: string): string {
 let resultado = '';
  for (const elemento of DNA) {
    if (!(elemento in DnaBasis))      {
      throw new Error ('Invalid input DNA.')
    }
     resultado += DnaBasis[<DnaBase>elemento];
  }
  return resultado;
}
