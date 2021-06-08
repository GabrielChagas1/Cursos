//  window.alert('Nikola Jokic MVP');
//  console.log(window.location.hash)

 let h1 = document.querySelector('h1');

 function callbackH1(){
   console.log(`Clicou em ${h1.innerText}`);
 }

 h1.addEventListener('click', callbackH1);


//* Exercícios

// Retorne o url da página atual utilizando o objeto window
console.log(`URL do navegador: ${window.location.href}`);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
let firstAtivo = document.querySelector('.ativo');

// Retorne a linguagem do navegador
console.log(`Lingaguem do navegador: ${navigator.language}`);

// Retorne a largura da janela 
console.log(`Largura do navegador: ${window.innerWidth}`)