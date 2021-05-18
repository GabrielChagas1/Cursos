const imgs = document.querySelectorAll('img');
// console.log(imgs)
// imgs.forEach((item, index) => console.log(item.src, index))

const titulo = document.getElementsByClassName('titulo');
const tituloArray = Array.from(titulo);

tituloArray.map((item) => console.log(item.innerHTML));