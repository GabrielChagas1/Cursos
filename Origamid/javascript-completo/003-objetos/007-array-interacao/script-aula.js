// const carros = ['Ford', 'Fiat', 'Honda'];

// const li = document.querySelectorAll('li')


// const teste = carros.map((item, index, array) => {
//   return `Carro: ${item}`
// })

// console.log(teste);
// console.log(carros);

// const numeros = [2, 4, 5, 6, 78];
// const numeros2 = numeros.map(n => n*2);
// console.log(numeros)
// console.log(numeros2)

const aulas = [
  {
  nome: 'HTML 1',
  min: 15
  },
  {
  nome: 'HTML 2',
  min: 10
  },
  {
  nome: 'CSS 1',
  min: 20
  },
  {
  nome: 'JS 1',
  min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min)

function nomeAulas(aula){
  return aula.nome
}

const arrayNomeAulas = aulas.map(nomeAulas);


const numeros = [10, 25, 60, 5, 35, 10];

const value = numeros.reduce((anterior, item) => {
  return anterior > item ? anterior : item;
});

console.log(value);

const maiorque3 = numeros.every(item => item > 3);

const igual3 = numeros.some(item => item === 3);

const buscaMaior10 = numeros.filter(item => item > 10);