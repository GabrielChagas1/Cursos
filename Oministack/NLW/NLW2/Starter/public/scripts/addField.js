// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField);

// quando clicar no botão

// executar uma ação
function cloneField(){
    // duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // pegar os campos
    const fields = newFieldContainer.querySelectorAll('input');

    // limpando os campos
    fields.forEach((field) =>{
        // pegar o field atual e limpando ele
        field.value = "";
    })

    //colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
    