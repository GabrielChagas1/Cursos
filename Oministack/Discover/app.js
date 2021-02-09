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
