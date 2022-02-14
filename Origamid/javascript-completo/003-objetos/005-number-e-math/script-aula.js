console.log(Number.isNaN(NaN));

console.log(Number.isInteger(20));
console.log(Number.isInteger(20.6));

console.log(parseFloat('99.50'));//mesma função sem o Number
console.log(Number.parseFloat('99.50'));//99.5
console.log(Number.parseFloat('99.50 reais'));//100
console.log(Number.parseFloat('R$ 99.50'));//NaN

console.log(Number.parseFloat('R$ 99.50', 10)); //99
console.log(Number.parseFloat(5.45, 10)); //5
console.log(Number.parseFloat('100 reais', 10)); //100

console.log(Number.parseInt('200.65', 10)); //100

const preco = 2.99
const carro = 100.456
const casa = 1499.49
console.log(+preco.toFixed()); //100
console.log(+carro.toFixed(2)); //100.46
console.log(casa.toFixed()); //1499

const real = 59.49

// converter um valor, para alguma moeda
console.log(real.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
console.log(real.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));

console.log(Math.abs(-5)); //5
console.log(Math.ceil(4.85)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.83)); //4
console.log(Math.floor(4.3)); //4
console.log(Math.round(4.75)); //5
console.log(Math.round(4.25)); //4
console.log(Math.max(4.25, 5, 7)); //7
console.log(Math.max(4.25, 5, 7)); //4.25
console.log(Math.round(4.25)); //4


console.log(Math.random()); //ele vai gerar um número aleatório entre 0 e 1
console.log(Math.random() * 100); //ele vai gerar um número aleatório entre 0 e 100
console.log(Math.random() * 500); //ele vai gerar um número aleatório entre 0 e 500

//ele vai gerar um número aleatório entre 72 e 32
let max = 72;
let min = 32;
console.log(Math.floor(Math.random() * (72 - 32 + 1) + 32)); 
console.log(Math.floor(Math.random() * (max - min + 1) + min)); 
