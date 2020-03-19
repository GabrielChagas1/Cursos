class Negociacao {

    // construtor da classe
    constructor(quantidade, valor){
        this._data = new Date();
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }
    
// getters
    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }

}