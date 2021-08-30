export const classify = (numeroTestado) => {
   if (numeroTestado <= 0) {throw new Error ('Classification is only possible for natural numbers.');}

   let somaDosDivisiveis = 0
   for (let n = 0; n < numeroTestado; n++) {
       const divisivel = numeroTestado % n;
       if (divisivel == 0) {somaDosDivisiveis += n};     
   }

   if (numeroTestado == somaDosDivisiveis) return 'perfect';
   if (numeroTestado < somaDosDivisiveis) return 'abundant';
   if (numeroTestado > somaDosDivisiveis) return 'deficient';

};