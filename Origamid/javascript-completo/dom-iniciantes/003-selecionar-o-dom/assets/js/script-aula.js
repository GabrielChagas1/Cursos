// let animais = document.getElementById('animais');
// let contato = document.getElementById('contato');
// console.log(animais);

// let gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection);


// const primeiraLi = document.querySelector('li');
// console.log(primeiraLi);

// let primeiraUl = document.querySelector('ul');
// console.log(primeiraUl);

// let linksInternos = document.querySelectorAll('[href^="#"]');
// console.log(linksInternos);

// let imagesProject = document.querySelectorAll('img');
// console.log(imagesProject[1]);

const gridSectionHTML = document.getElementsByClassName('grid-section');

const gridSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach((item) => console.log(item.querySelector('.titulo').innerHTML));

// convertando um array like em um array de verdade
const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach((item) => console.log(item.querySelector('.titulo').innerHTML))