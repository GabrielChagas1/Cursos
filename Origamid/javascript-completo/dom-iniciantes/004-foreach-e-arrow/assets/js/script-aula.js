const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.remove('azul');
menu.classList.toggle('azul');

const animais = document.querySelector('.animais ');
console.log(animais.attributes)


const img = document.querySelector('img');
img.setAttribute('alt', 'Raposa')
console.log(img.getAttribute('alt'));
const isAlt = img.hasAttribute('alt');
console.log(isAlt);