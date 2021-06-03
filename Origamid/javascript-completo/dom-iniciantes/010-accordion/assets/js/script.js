//* Navegação por tab
function initTabNav() {
  // recuperando todo o conteudo do tabMenu
  const tabMenu = document.querySelectorAll('.js-tabmenu li');

  // recuperando todo o conteudo do tabcontent
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  // verificação para adicionar a classe ativo ao primeiro item
  if (tabMenu.length && tabContent.length)
    tabContent[0].classList.add('ativo')

  //função para adicionar a classe de ativo ao item 
  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo');
  }

  // adicionando um evento para cada item 

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => activeTab(index));
  });
}

//* Accordion
function initAccordion() {

  // recuperando todos os itens do accordion
  const accordionlist = document.querySelectorAll('.js-accordion dt');

  // classe para ativar o accordion
  const activeClass = 'ativo';

  // inicializando o primeiro item
  if (accordionlist.length) {
    accordionlist[0].classList.add(activeClass)
    accordionlist[0].nextElementSibling.classList.add(activeClass)
  }

  // função responsavel por ativar e desativar os itens
  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  // cliando um evento para cada item do accordion
  accordionlist.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });

}



//* Iniciando as funções
initTabNav();
initAccordion();