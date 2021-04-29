'use strict'


//* Operadores de atribuição 

var x = 5;
var y = 10;

x += y; //x = x + y (15)
x -= y; //x = x + y (-5)
x *= y; //x = x + y (50)
x /= y; //x = x + y (.5)
x %= y; //x = x + y (.0)
x **= y; //x = x + y (9765625)

//* operador ternário

let idade = 19;
let naoPossuiDiabetes = true;

var podeBeber = (idade >= 18) ? 'Pode Beber' : 'Não pode beber';
console.log(podeBeber);

let beber = (idade >= 18 && naoPossuiDiabetes);

//* Não é necessário abrir e fechar chaves se tiver uma linha só dentro do bloco de código do IF

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = false;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? true : false;
console.log(darCredito)