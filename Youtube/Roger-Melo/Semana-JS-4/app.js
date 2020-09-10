const numbers = [1, 2, 3];

// dobrando os números do array numbers
const doubleNumbers = numbers.map( item => item * 2);

// console.log(numbers, doubleNumbers);


const products = [
	{ name: 'Mouse Sem Fio', price: 30 },
	{ name: 'Pen Drive', price: 25 },
	{ name: 'Cartucho de Tinta', price: 50 },
	{ name: 'Suporte Ergonômico para Notebook', price: 23 },
	{ name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(item => {
    if(item.price >= 30){
        return {name: item.name, price: item.price/2}
    }

    return item;
});

console.log(products, saleProducts);