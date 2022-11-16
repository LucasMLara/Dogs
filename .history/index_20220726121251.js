
function x(y) {
  let resultado;

  if(y <= 1945) {
    resultado = 'Geração silenciosa'
  } else if (y > 1945 && y <= 1964) {
    resultado = 'Boomers'
  } else if (y > 1964 && y <=  1980) {
    resultado = 'Geração X'
  } else if (y > 1980 && y <= 1996) {
    resultado = 'Millennials'
  } else {
    resultado = 'Geração Z'
  }
  return resultado
}

console.log(x(1999))