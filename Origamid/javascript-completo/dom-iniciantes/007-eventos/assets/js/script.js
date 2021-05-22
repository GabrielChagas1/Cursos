// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
// const linksInternos = document.querySelectorAll('a[href^="#"]');
// console.log(linksInternos);

// function handleLink(event){
//   event.preventDefault();

//   this.classList.add('ativo');

//   linksInternos.forEach((item) =>{
//     item.classList.remove('ativo');
//   });

// }

// linksInternos.forEach((link) =>{
//   link.addEventListener('click', handleLink);
// })

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const elements = document.querySelectorAll('body *');

function handleClick(event){
  console.log(event.currentTarget);
}

elements.forEach((item) =>{
  item.addEventListener('click', handleClick);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleClick(event){
  event.currentTarget.remove();
}


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickt(event){
  if(event.key === 't'){
    document.documentElement.classList.toggle('textomaior')
  }
}

window.addEventListener('keydown', handleClickt);