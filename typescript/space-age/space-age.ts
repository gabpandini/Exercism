type Planet = keyof typeof Planets;

export function age(planet: Planet, seconds: number): number {
  return +(seconds/Planets[planet]).toFixed(2);
}

enum Planets {
  earth = 31557600, // secons per year
  mercury = 0.2408467 * earth,
  venus = 0.61519726 * earth,
  mars =  1.8808158 * earth,
  jupiter = 11.862615 * earth,
  saturn = 29.447498 * earth,
  uranus = 84.016846 * earth,
  neptune = 164.79132 * earth,
}
