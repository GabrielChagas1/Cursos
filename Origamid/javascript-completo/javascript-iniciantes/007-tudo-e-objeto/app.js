'use strict'

// let pessoa = {
//   nome: 'Gabriel Chagas',
//   idade: 21,
//   profissao: 'Desenvolvedor',
//   possuiFaculdade: true
// };

// let quadrado = {
//   lados:4,  
//   area(lado){
//     return lado * lado
//   },

//   perimetro(lado){
//     return this.lados * lado;
//   },

//   getPi(){
//     return Math.PI.toFixed(2);
//   },

//   getRandomNumber(){
//     let number = Math.random() * 10;
//     let rounded = Math.floor(number);

//     return `${number} ${rounded}`;
//   }
// } 

// tudo é objeto

let nome = "Gabriel";

let nomeMinusculo = nome.toLowerCase();

let num = 11.8;

var btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
 btn.classList.add('ativo')
 console.log(btn.innerHTML)
});

// nomeie 3 propriedades ou métodos de strings
let nome = "Gabriel"
// fixed
// length
// slice
 
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V