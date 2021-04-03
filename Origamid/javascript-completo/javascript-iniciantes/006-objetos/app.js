'use strict'

let pessoa = {
  nome: 'Gabriel Chagas',
  idade: 21,
  profissao: 'Desenvolvedor',
  possuiFaculdade: true
};

let quadrado = {
  lados:4,  
  area(lado){
    return lado * lado
  },

  perimetro(lado){
    return this.lados * lado;
  },

  getPi(){
    return Math.PI.toFixed(2);
  },

  getRandomNumber(){
    let number = Math.random() * 10;
    let rounded = Math.floor(number);

    return `${number} ${rounded}`;
  }
} 