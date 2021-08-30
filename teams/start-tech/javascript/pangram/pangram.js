export const isPangram = (frase) => {
    if (frase === '') return false;
    
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    const chars = frase.toLowerCase().split("");
    
  
    for (let letras of alfabeto) {
      if (!chars.includes(letras)) {
        return false;
      }
    }
    return true;
  
  };