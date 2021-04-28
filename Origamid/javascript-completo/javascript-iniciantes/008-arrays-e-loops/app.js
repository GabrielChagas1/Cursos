'use strict'

var videoGames = ["PS4", "Xbox One", "Switch"];

console.log(videoGames.pop()); 

videoGames.push("3DS");

console.log(videoGames.length)
console.log(`último elemento: ${videoGames[videoGames.length - 1]}`)


console.log(videoGames);


let total = 10;
let tabuada = 5;

for (let i = 1; i <= total; i++) {
  console.log(`${tabuada} x ${i} = ${tabuada*i}`)
}

var i = 0;
while(i <= 100){
  console.log(i);
  i = i + 5;
}