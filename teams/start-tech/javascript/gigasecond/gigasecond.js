//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (dataReferencia) => {
  var dataEmMilisegundos = dataReferencia.getTime();  //Pegando o num de milisegundos da dataReferencia desde 1970
  var dataEmGiga = dataEmMilisegundos + 1e9 * 1000;  //Somando 1 gigasegundo, multiplicando por mil

  return new Date(dataEmGiga);  //Transformando o num de milisegundos para data normal
};
