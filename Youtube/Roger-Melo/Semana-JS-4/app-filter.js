// código filter

//recebe uma função e executa para cada item de array
// criar um novo array com só alguns itens

const randomNumbers = [36, 99, 37, 63];

// forma maior de fazer
const numbersGreatherThan37 = randomNumbers.filter(item => {
    if(item > 37){
        return item
    }
});

// melhor forma de fazer
const newNumbersGreatherThan37 = randomNumbers.filter(item => item > 37);

// console.log(newNumbersGreatherThan37);

// console.log({randomNumbers, newNumbersGreatherThan37});


const users = [
	{ name: 'Ada Lovelace', premium: true },
	{ name: 'Grace Hopper', premium: false },
	{ name: 'Alan Turing', premium: true },
	{ name: 'Linus Torvalds', premium: false },
	{ name: 'Margaret Hamilton', premium: true }
]

// forma mais prática
const newPremiumUsers = users.filter(item => item.premium);

// forma mais demorada, porém funciona
const premiumUsers = users.filter(item =>{
    if(item.premium){
        return item;
    }
});

// console.log({users, premiumUsers, newPremiumUsers});