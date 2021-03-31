// Crie uma função para verificar se um valor é Truthy
function isTruthy(value){
  return !!value;
}
console.log(isTruthy(0))


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function calcPerimeter(value){
  return value * 4;
}
console.log(calcPerimeter(12));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nameComplete(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}
console.log(nameComplete('gabriel', 'chagas'));

// Crie uma função que verifica se um número é par
function isEven(value){
  return value % 2 === 0;
}
console.log(isEven(9));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verifyType(value){
  return typeof value;
}
console.log(verifyType(0));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
document.addEventListener('scroll', () => console.log(nameComplete('Gabriel', 'Chagas')))

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);