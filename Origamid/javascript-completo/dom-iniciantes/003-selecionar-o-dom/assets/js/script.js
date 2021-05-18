// Retorne no console todas as imagens do site
const images = document.querySelectorAll('img');
const imagesTag = document.getElementsByTagName('img');
// const images = document.querySelectorAll('img');
console.log(images, imagesTag)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const image = document.querySelectorAll('img[src^="./assets/img/imagem"]');
console.log(image)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelector('.animais-descricao h2');
console.log(animaisDescricao);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
const lastP = paragrafos[--paragrafos.length];
console.log(lastP);
