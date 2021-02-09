const  Modal = {
    open(){
        // Abrir modal

        // adicionar a classe active ao modal
       document
            .querySelector('.modal-overlay')
            .classList.add('active');
    },

    close(){
        // fechar modal

        // retirar a classe active ao modal
        document
            .querySelector('.modal-overlay')
            .classList.remove('active');
    }
}

// recuperando a lista de transações
const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '01/01/2021'
    },
    {
        id:2,
        description: 'Salário Janeiro',
        amount: 250000,
        date: '05/01/2021'
    },
    {
        id:3,
        description: 'Livros Arsene Lupin',
        amount: -5900,
        date: '06/01/2021'
    }
]

// criando um objeto transação
const Transaction = {
    incomes(){
        // somar as entradas
        var incomes = 0;

        // Filtrando os registros que são maiores que zero
        transactions.forEach((transaction) => { if(transaction.amount > 0) incomes += transaction.amount});

        // retornando o valor total das entradas
        return incomes;

    },

    expenses(){
        // somar as saídas
        var expenses = 0;

        // Filtrando os registros que são menores que zero
        transactions.forEach((transaction) => { if(transaction.amount < 0) expenses += transaction.amount});

        // retornando o valor total das saídas
        return expenses;
    },

    total(){
        // entradas subtraindo saídas
        return this.incomes() + this.expenses();
    }
}


const DOM = {
    // recuperando o tbody da table para inserir as transações novas
    transactionsContainer: document.querySelector('#data-table tbody'),

    // método para adicionar uma transação
    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);

        // adicionando a transação ao HTML
        DOM.transactionsContainer.appendChild(tr);
    },


    // método para criar o HTML de uma transação
    innerHTMLTransaction(transaction){
        // operador ternário para descobrir se a classe do amount tem que ser expense ou income
        const CSSclass = transaction.amount < 0 ? 'expense' : 'income';

        // formantando o valor de amount
        const amount = Utils.FormatCurrency(transaction.amount);
        
        // criando html
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
            <img src="./assets/minus.svg" alt="Imagem Minus">
            </td>        
        `
        // retornando o html
        return html
    }
}

// criando uma estrutura para criar funções util para o programa.
const Utils = {
    FormatCurrency(value){
        // recuperando o sinal de - se o valor for negativo
        const signal = Number(value) < 0 ? '-' : '';

        // removendo tudo o que não for números
        value = String(value).replace(/\D/g, '');

        // dividindo por 100 para fazer as casas decimais
        value = Number(value) / 100;

        // convertando o número para um valor de moeda brasileira
        value = value.toLocaleString('pt-BR',{
            style: "currency",
            currency: "BRL"
        });

        // retornando o valor final
        return signal + value;
    }
}

// forEach para varrer todoas as transações e criar seu HTML
transactions.forEach((transaction) => DOM.addTransaction(transaction));