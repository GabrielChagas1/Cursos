
let $ = document.querySelector.bind(document);

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


function populateCitys(){
    
}


populateUFs();




// $(".create__field select[name=uf]")
//     .addEventListener("change", () => {
//         console.log('mudei');
//     });