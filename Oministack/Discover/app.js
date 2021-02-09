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

