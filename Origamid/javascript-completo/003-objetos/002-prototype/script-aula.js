function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
}

const gabriel = new Pessoa('Gabriel', 21);

const pais = 'Brasil';
const cidade = new String('Rio');

console.log(pais.charAt(0));
console.log(cidade.charAt(0));

Pessoa.prototype.teste = function(){
  return `${this.nome} ${this.idade}`
}


const listaTeste = document.querySelectorAll('li');
