class MensagemView extends View{

    constructor(elemento){
        super(elemento)
    }

    _template(model){
        return model.texto != '' ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`
    }
    
}

class Conta {
    constructor(saldo){
        this._saldo = saldo;
    }

    get Saldo(){
        return this._saldo
    } 

    atualiza(taxa){
        throw new Error('Precisa implementar o método atualiza');
    }
}

class ContaCorrente extends Conta{
    atualiza(taxa){
        this.saldo = this._saldo + taxa;
    }
}

class ContaPoupança extends Conta{
    atualiza(taxa){
        this.saldo = this._saldo + (taxa * 2); 
    }
}