
let $ = document.querySelector.bind(document);

// função para popular os estados
function populateUFs(){
    const ufSelect = document.querySelector(".create__field select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then( states => {
        for(let state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    }); 
};

// função para popular as cidades
function getCities(event){
    let citySelect = document.querySelector(".create__field select[name=city]");
    let stateInput = document.querySelector(".create__field input[name=state]");
    
    let indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;

    let ufValue = event.target.value;
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    citySelect.innerHTML = "<option value>Selecione a cidade</option>";
    citySelect.disabled = true

    fetch(url)
    .then((res) => res.json())
    .then( cities => {
        
        for(let city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false;
    }); 

}

// chamando função ao navegador ler o documento
populateUFs();

// código para chamar a função que popula as cidades
document.querySelector(".create__field select[name=uf]")
    .addEventListener("change", getCities);

// Itens de coleta
let itemsToCollect = document.querySelectorAll(".items-grid li");
for(let item of itemsToCollect){
    item.addEventListener('click', handleSelectedItem);
}  

let selectedItems = [];
const collectedItems = document.querySelector("input[name=items]");

// função que vai ser executada toda vez que um item for clicado
function handleSelectedItem(event){
    // recuperando o target do evento
    let itemLi = event.target;

    // adicionar ou remover uma classe com javascript
    itemLi.classList.toggle('selected')
    
    // recupera o id do item selecionado
    let itemId = itemLi.dataset.id;

    // recupera o index do item, se ele não estiver no array ele volta com -1, senão ele volta com o index do item
    let alreadySelected = selectedItems.findIndex(item => item === itemId);

    // se ele já existir no array, ele remove
    if(alreadySelected >= 0){
        let filteredItems = selectedItems.filter(item =>{
            let itemIsDifferent = item != itemId;
            return itemIsDifferent;
        });
        selectedItems = filteredItems;
    }else{
        // senão ele adiciona no array
        selectedItems.push(itemId);
    }
    // adicionando o array dentro do input
    collectedItems.value = selectedItems;
}