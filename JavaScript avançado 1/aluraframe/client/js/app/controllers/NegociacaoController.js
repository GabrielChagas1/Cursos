class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);

        // recuperando dados do form
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    
    adicionar(event){
        event.preventDefault();
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map((item, index) => item - index % 2)
        );
            
        // criando negocioção
        let negociocao = new Negociacao(
          data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociocao);
        this.clearFields(this._inputData, this._inputQuantidade, this._inputValor);
    }

    clearFields(data, quantidade, valor){
        data.focus()
        data.value= '';
        quantidade.value = 0;
        valor.value = 0;
    }
}