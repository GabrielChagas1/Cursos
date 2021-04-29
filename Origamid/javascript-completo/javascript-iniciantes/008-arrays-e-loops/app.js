'use strict'

// var videoGames = ["PS4", "Xbox One", "Switch"];

// console.log(videoGames.pop()); 

// videoGames.push("3DS");

// console.log(videoGames.length)
// console.log(`último elemento: ${videoGames[videoGames.length - 1]}`)


// console.log(videoGames);


// let total = 10;
// let tabuada = 5;

// for (let i = 1; i <= total; i++) {
//   console.log(`${tabuada} x ${i} = ${tabuada*i}`)
// }

// var i = 0;
// while(i <= 100){
//   console.log(i);
//   i = i + 5;
// }


// let frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']

// frutas.forEach((item, index, array) =>{
//   frutas.pop()
//   console.log(item, index, array)
// });


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let copas = ['1959', '1962', '1970', '1994', '2002'];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

copas.forEach((copa, index) =>{
  console.log(`O Brasil ganhou a ${++index}° em ${copa}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
  if(frutas[i] === "Pera") break;  
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

let lasfFruit = frutas[frutas.length - 1];

console.log(lasfFruit);