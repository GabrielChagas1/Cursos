// recuperando todo o conteudo do tabMenu
const tabMenu = document.querySelectorAll('.js-tabmenu li');

// recuperando todo o conteudo do tabcontent
const tabContent = document.querySelectorAll('.js-tabcontent section');

// verificação para adicionar a classe ativo ao primeiro item
if(tabMenu.length && tabContent.length)
  tabContent[0].classList.add('ativo')

//função para adicionar a classe de ativo ao item 
function activeTab(index){
  tabContent.forEach((item) => {item.classList.remove('ativo')})
  tabContent[index].classList.add('ativo');
}

// adicionando um evento para cada item 

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => activeTab(index));
});