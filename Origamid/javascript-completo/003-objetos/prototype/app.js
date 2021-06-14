function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
}

const gabriel = new Pessoa('Gabriel', 21);

console.log(Pessoa.prototype)
console.log(gabriel.prototype)