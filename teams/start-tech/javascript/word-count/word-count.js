//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (texto) => {
  const letrasMinusculas = texto.toLowerCase();  //Passando todas as letras pra minúsculo 
  const palavrasSeparadas = letrasMinusculas.match(/(\w+)('\w+)?/g);  //Separando as palavras com e sem apóstrofo
  
  let resultado = {};
  for (const palavra of palavrasSeparadas){  //Realizando a contagem
      resultado[palavra] ??= 0;
      resultado[palavra] += 1;
    
  }
  return resultado;
};
