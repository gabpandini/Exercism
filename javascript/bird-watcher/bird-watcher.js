export function totalBirdCount(birdsPerDay) {
  let soma = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    soma += birdsPerDay[i]
  }
  return soma;
}

export function birdsInWeek(birdsPerDay, week) {
  let passarosSemana = birdsPerDay.slice((week*7)-7, (week*7));
    return totalBirdCount(passarosSemana);
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i = i + 2) {
    birdsPerDay[i] = birdsPerDay[i] + 1;
  
  }
  return birdsPerDay;
}
