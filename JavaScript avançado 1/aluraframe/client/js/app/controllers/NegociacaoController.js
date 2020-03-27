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
        
        // criando negociação
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(DateHelper.dataParaTexto(negociacao.data));

        this.clearFields(this._inputData, this._inputQuantidade, this._inputValor);
    }

    clearFields(data, quantidade, valor){
        data.focus()
        data.value= '';
        quantidade.value = 0;
        valor.value = 0;
    }
}