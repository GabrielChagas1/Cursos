// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade){
  this.nome = nome,
  this.sobrenome = sobrenome,
  this.idade = idade
}

Pessoa.prototype.completedName = function(){
  return `${this.nome} ${this.sobrenome}`
}

const gabriel = new Pessoa('Gabriel', 'Chagas', 22)

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

//li.constructor.name

li;//htmlliElement
li.click;//function
li.innerText;//string
li.value;//number
li.hidden;//boolean
li.offsetLeft;//number
li.click();//undefined




// Qual o construtor do dado abaixo:
li.hidden.constructor.name;//string
