// const perimetro = new Function('lado', 'return lado * 4');

// function somar(n1, n2){
//   return n1 + n2;
// }

// console.log(somar(3,3));

function Dom(seletor){
  this.element = document.querySelector(seletor);
}

const p = new Dom('p');

console.log(p.element);