export function twoSum(array1, array2) {
  let num1 = parseFloat(array1.join(''));
  let num2 = parseFloat(array2.join(''));
  let soma = num1 + num2;
  return soma;
}

export function luckyNumber(value) {
  const tranformarString = value.toString();
  const arr = tranformarString.split('').reverse().join('');
 
  if (tranformarString == arr) {
    return true;
  } else {
    return false;
  }
}

export function errorMessage(input) {
  let convertNum = Number(input)

  if (input == '' || input == null || input == undefined){
    return 'Required field';
  } else if (!convertNum) {
    return 'Must be a number besides 0';
  } else {
    return '';
  }

}
