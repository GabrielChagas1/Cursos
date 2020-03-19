class NegociacaoController {

    
    adicionar(event){
        let $ = document.querySelector.bind(document);
        event.preventDefault();
        
        // recuperando dados do form
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData, inputQuantidade, inputValor)
    }
}