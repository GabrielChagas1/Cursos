class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        // recuperando dados do form
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    
    adicionar(event){
        event.preventDefault();
        // criando negociação
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        // limpando campos
        this._clearFields(this._inputData, this._inputQuantidade, this._inputValor);
    }

    // criação de uma negociação
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    // limpa campos
    _clearFields(data, quantidade, valor){
        data.focus()
        data.value= '';
        quantidade.value = 0;
        valor.value = 0;
    }
}