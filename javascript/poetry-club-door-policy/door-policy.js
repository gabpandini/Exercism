// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

export function frontDoorResponse(blurb) {
    let letra = blurb.charAt(0);
    return letra;
}

export function backDoorResponse(blurb) {
  let tirandoVazioDoFinal = blurb.trim();
  let letra2 = tirandoVazioDoFinal.charAt(tirandoVazioDoFinal.length-1);
  return letra2;
}

function capitalize(word) {
  let maiuscula = word.charAt(0).toUpperCase();
  let minuscula = word.slice(1).toLowerCase();

  return maiuscula + minuscula;
}

export function frontDoorPassword(responses) {

  let tirandoVazioDoFinal2 = responses.trim();
  //let letra3 = tirandoVazioDoFinal2.charAt(tirandoVazioDoFinal2.length-1);
  var stringFinal= capitalize(tirandoVazioDoFinal2)
  return stringFinal;
 
}

export function backDoorPassword(responses) {
  var stringFinal2 = frontDoorPassword(responses);
  var final = `${stringFinal2}, please`
  return final;
}
