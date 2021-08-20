//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (orbita, idade) => {

  const anoTerrestre = 31557600;
  let anoNovaOrbita = 1;
  if (orbita === "earth") {
    anoNovaOrbita = 1;
  } else if (orbita === "mercury") {
    anoNovaOrbita = 0.2408467 ;
  } else if (orbita === "venus") {
    anoNovaOrbita = 0.61519726;
  } else if (orbita === "mars") {
    anoNovaOrbita = 1.8808158;
  } else if (orbita === "jupiter") {
    anoNovaOrbita = 11.862615;
  } else if (orbita === "saturn") {
    anoNovaOrbita = 29.447498;
  } else if (orbita === "uranus") {
    anoNovaOrbita = 84.016846;
  } else if (orbita === "neptune") {
    anoNovaOrbita = 164.79132;
  } 
  const idadeEmDeterminadaOrbita = parseFloat((idade / anoTerrestre / anoNovaOrbita).toFixed(2));

  return idadeEmDeterminadaOrbita;

};
