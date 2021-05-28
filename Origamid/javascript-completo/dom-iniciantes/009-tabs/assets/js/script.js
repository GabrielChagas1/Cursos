// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const menuClone = menu.cloneNode(true);
copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const faqList = document.querySelector('.faq-lista');
const firstDT = faqList.querySelector('dt');
// console.log(firstDT)

// Selecione o DD referente ao primeiro DT
const ddFirst = firstDT.nextElementSibling;
// console.log(ddFirst);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;