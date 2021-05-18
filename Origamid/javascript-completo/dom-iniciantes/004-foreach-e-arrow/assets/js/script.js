// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => item.classList.add('ativo'));
console.log(menu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item, index) => {if(index !== 0) item.classList.remove('ativo')});
console.log(menu);

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  const isAlt = item.hasAttribute('alt')
  console.log(isAlt);
});

// Modifique o href do link externo no menu
const hrefExtern = document.querySelector('a[href^="http"]');
hrefExtern.setAttribute('href', 'https://www.globo.com/')
console.log(hrefExtern)
