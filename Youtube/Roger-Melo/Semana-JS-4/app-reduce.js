// Como o nome sugere, o reduce busca reduzir um array. Ele iterará por cada elemento dessa lista com o objetivo de ao final gerar um único valor (de qualquer tipo), como por exemplo a soma de todos os elementos desse array. Lembrando que não ficamos presos apenas a números.

// https://medium.com/@raullesteves/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380

const numbers = [1, 2, 3, 80];

// entendendo como funciona o reduce.
const sumResult = numbers.reduce((accumulator, item, index) => {
    console.log(`${index} - Acumulador ${accumulator}`);
    return accumulator + item
}, 0);

const newSumResult = numbers.reduce((accumulator, item) => accumulator + item, 0);

// console.log(newSumResult);

const phaseScores = [
	{ name: 'Vinicius Costa', score: 337 },
	{ name: 'Roger Melo', score: 43 },
	{ name: 'Alfredo Braga', score: 234 },
	{ name: 'Pedro H. Silva', score: 261 },
	{ name: 'Ana Paula Rocha', score: 491 },
	{ name: 'Vinicius Costa', score: 167 },
	{ name: 'Roger Melo', score: 137 },
	{ name: 'Alfredo Braga', score: 135 },
	{ name: 'Ana Paula Rocha', score: 359 },
]

const teste = phaseScores.reduce((accumulator, phaseScores) => {
    if(phaseScores.name === 'Roger Melo'){
        accumulator += phaseScores.score;
    }

    return accumulator
}, 0);

console.log(teste);