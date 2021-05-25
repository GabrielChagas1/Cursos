const menu = document.querySelector('.menu');

// console.log(menu.innerHTML);
// console.log(menu.outerHTML);
// console.log(menu.innerText);

const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement);
// console.log(lista.parentElement.parentElement);
// console.log(lista.parentElement.previousElementSibling);
// console.log(lista.parentElement.nextElementSibling);
// console.log(lista.children);
// console.log(lista.children[0]);
// console.log(lista.children[--lista.children.length]);

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = contato.querySelector('.mapa');

// lista.appendChild(titulo); 
// contato.insertBefore(lista, titulo);
// contato.removeChild(titulo);
// contato.replaceChild(mapa, titulo);

// const h1 = document.createElement('h1');
// h1.innerText = 'Novo Título'
// h1.classList.add('titulo');
// mapa.appendChild(h1);

const h1 = document.querySelector('.titulo');
const faq = document.querySelector('.faq');

const clone = h1.cloneNode(true);
faq.appendChild(clone);


console.log(clone)