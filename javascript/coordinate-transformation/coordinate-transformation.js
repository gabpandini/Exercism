
export function translate2d(dx, dy) {
  return (x, y) => [x + dx, y + dy];
}

export function scale2d(sx, sy) {
  return (x, y) => [x * sx, y * sy];
}

export function composeTransform(f, g) {
  return function (x, y) {
    var [x1, y1] = f(x, y);
    return g(x1, y1);
  };
}

export function memoizeTransform(f) {
  var x1, y1;
  var resultado;

  return function (x, y) {
    if (x === x1 && y === y1) {
      return resultado;
    }
    x1 = x;
    y1 = y;
    resultado = f(x1, y1);
    
    return resultado;
  };
  
}
