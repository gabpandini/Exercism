//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (RNA = '') => {
  // Tradução
  let translation = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
  };

  // Utilizado regex para dividir cada terceira letra
  if (RNA !== '') {
    let rnaArray = RNA.match(/.{1,3}/g);
    let transArray = []; // Vai guardar a proteina traduzida

    // Utilizado .every para interromper ao atingir um códon determinado 
    //(.every testa se todos os elementos do array passam pelo teste implementado pela função fornecida)
    rnaArray.every((rna) => {
      if (translation[rna] === 'STOP') {
        return false;
      } else if (translation[rna] === undefined) {
        // Traz o erro se o codon não é um RNA válido 
        throw new Error('Invalid codon');
      } else {
        transArray.push(translation[rna]);
        return true;
      }
    });

    // Retorna a lista de proteinas traduzidas
    return transArray;
  } else {
    // Se não tiver RNA listado então não tem proteinas 
    return [];
  }
};