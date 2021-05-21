// Verifique a distância da primeira imagem
// em relação ao topo da página

const image = document.querySelector('img');
console.log(image.offsetTop);


// Retorne a soma da largura de todas as imagens
function somaImages() {
  const images = document.querySelectorAll('img');
  let soma = 0;
  images.forEach((item) => {
    soma += item.offsetWidth;
  });
  console.log(soma)
}

// evento que espera as imagens carregar para disparar a função de somaImages
window.onload = function (){
  somaImages();
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
links.forEach((item) => {
  if (item.offsetWidth >= 48 && item.offsetHeight >= 48) {
    console.log(item, 'possui boa acessibilidade');
  }else{
    console.log(item, 'não possui boa acessibilidade')
  }
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

if(window.matchMedia('(max-width: 720px)').matches){
  let menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}