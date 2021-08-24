//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const obj = {
black: 0,
brown: 1,
red: 2,
orange: 3,
yellow: 4,
green: 5,
blue: 6,
violet: 7,
grey: 8,
white: 9
};
export const colorCode = (color) => { //retorna o valor de acordo com a cor inserida
    return obj[color]
};

export const COLORS = Object.keys(obj);  //retorna um array com os nomes das cores
