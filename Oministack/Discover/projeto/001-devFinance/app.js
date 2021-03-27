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

let COLOR_THEME = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'

function switchTheme() {
const currentTheme = COLOR_THEME

COLOR_THEME = currentTheme === 'light'
    ? 'dark'
    : 'light'

const rules = window.document.styleSheets[1].cssRules

for (i = 0; i < rules.length; i++) {
    media = rules[i].media

    if (media == undefined) {
    continue
    }

    let item = media
    .mediaText
    .replace(
        "(prefers-color-scheme: " + COLOR_THEME + ")",
        "(prefers-color-scheme: " + currentTheme + ")"
    )

    media.mediaText = item
}
}

const Storage = {
    get() {
        return JSON.parse(localStorage.getItem('dev.finances:transactions')) || []
    },

    set(transactions){
        localStorage.setItem('dev.finances:transactions', JSON.stringify(transactions));
    }
}

// criando um objeto transação
const Transaction = {
    // recuperando as transações
    all: Storage.get(),    

    // função para add uma transação
    add(transaction){
        // adicionando uma transação nova
        Transaction.all.push(transaction);

        // função para atualizar a lista no front
        App.reload();

        // mostrando mensagem ao add uma nova transação
        Utils.MessageAddTransaction();
    },

    remove(index){
        // remover um item das transações pela lista
        Transaction.all.splice(index, 1);

        // função para atualizar a lista no front
        App.reload();
        
        // Mostrando mensagem ao deletar uma transação
        Utils.MessageDeleteTransaction()
    },

    incomes(){
        // somar as entradas
        var incomes = 0;

        // Filtrando os registros que são maiores que zero
        Transaction.all.forEach((transaction) => { if(transaction.amount > 0) incomes += transaction.amount});

        // retornando o valor total das entradas
        return incomes;

    },

    expenses(){
        // somar as saídas
        var expenses = 0;

        // Filtrando os registros que são menores que zero
        Transaction.all.forEach((transaction) => { if(transaction.amount < 0) expenses += transaction.amount});

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
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index);
        tr.dataset.index = index;

        // adicionando a transação ao HTML
        DOM.transactionsContainer.appendChild(tr);
    },


    // método para criar o HTML de uma transação
    innerHTMLTransaction(transaction, index){
        // operador ternário para descobrir se a classe do amount tem que ser expense ou income
        const CSSclass = transaction.amount < 0 ? 'expense' : 'income';

        // formantando o valor de amount
        const amount = Utils.FormatCurrency(transaction.amount);

        const date = Utils.formatDate(transaction.date);
        
        // criando html
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${date}</td>
            <td>
                <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Imagem Minus">
            </td>        
        `
        // retornando o html
        return html
    },

    // método para atualizar os balanços
    updateBalance(){

        document.getElementById('incomeDisplay').innerHTML = Utils.FormatCurrency(Transaction.incomes());
        

        document.getElementById('expenseDisplay')
        .innerHTML = Utils.FormatCurrency(Transaction.expenses());

        document.getElementById('totalDisplay')
        .innerHTML = Utils.FormatCurrency(Transaction.total());
    },

    // método para limpar a lista de transação
    clearTransaction(){
        DOM.transactionsContainer.innerHTML = "";
    }
}

const Form = {

    // propriedades do form
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date-transaction'),

    getValues(){
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },

    validateFields(){
        const { description, amount, date} = Form.getValues();

        if(
            description.trim() === "" || 
            amount.trim() === "" ||
            date.trim() === ""
        )
        {
            // se algum campo tiver em branco, uma mensagem com um erro será retornado.
            throw new Error("Por favor, preencha todos os campos")
        }

    },

    formatValues(){
        let { description, amount, date} = Form.getValues();

        amount = Utils.formatAmount(amount);
        
        return { description, amount, date};
    },

    saveTransaction(transaction){
        Transaction.add(transaction);

    },

    clearFields(){
        Form.description.value = "";
        Form.amount.value = "";
        Form.date.value = "";

    },


    submit(event){
        event.preventDefault();

        try {
            // verificar se os campos estão preenchidos
            Form.validateFields();
            
            // formatando os valores que vem do form
            const transaction = Form.formatValues()

            // salvando uma transação
            Form.saveTransaction(transaction);

            // limpando os campos
            Form.clearFields();

            // fechando o modal
            Modal.close();
            

        } catch (error) {
            // recuperando a mensagem para voltar para o usuário.
            alert(error.message);
        }

    }
}

// criando uma estrutura para criar funções util para o programa.
const Utils = {
    // formatando o valor que é recebido
    formatAmount(value){
        // value = Number(value.replace(/\,\./g)) * 100;
        value = value * 100;
        return Math.round(value);
    },

    // formantando a data
    formatDate(value){
        const splittedDate = value.split('-');
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
    },

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
    },

    MessageDeleteTransaction(){
        document.querySelector('.offTransaction').classList.add('active');
        setTimeout(() => { document.querySelector('.offTransaction').classList.remove('active')}, 5000);
    },

    MessageAddTransaction(){
        document.querySelector('.newTransaction').classList.add('active');
        setTimeout(() => { document.querySelector('.newTransaction').classList.remove('active')}, 5000);
    },

    LimitDateTransaction(){
        document.getElementById('date-transaction').setAttribute('max', new Date().toISOString().split('T')[0]);
    },

    SortTransactionList(){

        Transaction.all.sort((a, b) => {

            key1 = new Date(a.date).getTime();
            key2 = new Date(b.date).getTime();

            if (key1 > key2) {
                return -1;
            } else if (key1 == key2) {
                return 0;
            } else {
                return 1;
            }
        });
    }
    
}

const Pagination = {

    Pagination (page, total, limit) {
        var pageSize = Math.ceil(total/limit);
        
        var _pagination = {
            page: page,
            total: total,
            limit: limit,
            pages: pageSize
          };
      
        if(page > 1){
          var prev = page-1;
          _pagination.previous = prev;
        }
      
        var remaining = total - (page * limit);
      
        if(remaining > 0){
          _pagination.next = page+1;
        }
      
        return _pagination;
    },

    setItemsPagination(){
        // recuperando todas as transações
        var array = Transaction.all;
        
        // recuperando a página pela url 
        var pageQuery = this.getUrlVars()["pagina"];

        // limitando para 3 transações
        var limit = 4;

        // recuperando o total das transações
        var total = array.length;

        // recuperando o valor inteiro da página, se não tiver transações para a página é retornado para o primeiro 
        var page = parseInt(pageQuery) || 1;

        // verificando se o número da url existe itens para ele, senão ele traz os produtos da página 1
        if(parseInt(pageQuery) > Math.ceil(total/limit)) page = 1;

        // recuperando valor do offset
        var offset = (page - 1) * limit;
        var items = array.slice(offset, offset+limit);

        // chamando método pagination
        let paginationResume = this.Pagination(page, total, limit);

        // retornando items e pagination Resume
        return {items, paginationResume}
    },

    setPagination(){

        // recuperando os dados do pagination resume
        let { paginationResume } = this.setItemsPagination();
        
        // criando variável para receber o html 
        var paginationItems = '';

        // se existir uma página anterior, cria o elemento
        if(paginationResume.previous > 0) paginationItems +=`<a class="pagination__link" href="index.html?pagina=${paginationResume.previous}">Anterior</a>`;
        
        // se existir uma próxima página, cria o elemento
        if(paginationResume.next > 0) paginationItems +=`<a class="pagination__link" href="index.html?pagina=${paginationResume.next}">Próximo</a>`;

        // inserindo na página
        document.getElementById('pagination').innerHTML = paginationItems;
    },

    getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m,key,value) {
          vars[key] = value;
        });
        return vars;
    }
}

const App = {
    init() {

        // colocando a lista de transações em ordem
        Utils.SortTransactionList();
        
        Pagination.setPagination();

        var { items } = Pagination.setItemsPagination();


        // forEach para varrer todos as transações e criar seu HTML
        items.forEach((transaction, index) => DOM.addTransaction(transaction, index));

        //Atualizando os valores
        DOM.updateBalance();

        // limitando a data da transação para até hoje
        Utils.LimitDateTransaction();


        Storage.set(Transaction.all);
    },

    // método para ser chamado toda vez que eu transação for adicionada
    reload(){
        // Ordenando os registros por ordem
        DOM.clearTransaction();
        App.init();
    }
}

// método para preencher a tabelas e os balance
App.init();
