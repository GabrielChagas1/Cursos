const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Chagas',
    idade: 21,
    profissao: 'Desenvolvedor Júnior'
}

// criando um json do nosso objeto.
const myJSON = JSON.stringify(pessoa);

// exibindo no console o json
console.log(myJSON);