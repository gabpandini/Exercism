//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//Ser divisível por 4 e NÃO por 100, EXCETO quando é divisível por 400
//Resto da divisão por 4 == 0 retorna verdadeiro
//Resto da divisão

export const isLeap = (ano) => {   
    const divisivelPor4 = ano % 4 === 0;
    const divisivelPor100 = ano % 100 === 0;
    const divisivelPor400 = ano % 400 === 0;
    const ehBissexto = divisivelPor4 && !divisivelPor100 || divisivelPor400; //Regras do ano bissexto
    return ehBissexto
 
};
