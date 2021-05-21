const listaAnimais = document.querySelector('.animais-lista');

const testeHeight = listaAnimais.scrollHeight;

let animaisTop = listaAnimais.offsetTop;

console.log(testeHeight, animaisTop);

const primeiroH2 = document.querySelector('h2');
const h2left = primeiroH2.offsetLeft;

console.log(h2left);

const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();

console.log(rect);

const small = window.matchMedia('(max-width: 600px').matches;
console.log(small)