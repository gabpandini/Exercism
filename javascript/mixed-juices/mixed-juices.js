export function timeToMixJuice(name) {
var tempo = 0;
  switch(name){
  case 'Pure Strawberry Joy':
    tempo = 0.5;
  break;
  case 'Energizer':
  case 'Green Garden':
    tempo = 1.5;
  break;
  case 'Tropical Island':
    tempo = 3;
  break;
  case 'All or Nothing':
    tempo = 5;
  break;
  default:
  tempo = 2.5;
 } return tempo;
}

export function limesToCut(wedgesNeeded, limes) {
    let quantidade = 0;
    let contador = 0;
   
    while ( quantidade < wedgesNeeded && contador < limes.length){
      if (limes[contador] === 'small') {
        quantidade += 6;
      }
      else if (limes[contador] === 'medium') {
       quantidade += 8;
     }
      else if (limes[contador] === 'large') {
       quantidade += 10;
     }
     contador ++;
    }
   return contador;
}

export function remainingOrders(timeLeft, orders) {

  while (timeLeft > 0 && orders.length > 0) {
    timeLeft -= timeToMixJuice(orders.shift())
  } 
  return orders;
}