function Carro(marca = 'Marca', preco = 0){
  const taxa = 1.2;
  const precoFinal = preco * taxa
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = new Carro('Fiat', 3000);


const mazda = new Carro('Mazda', 5000);

console.log(mazda);


// const Dom = {
//   selector: 'li',

//   element(){
//     return selectElement = document.querySelector(this.selector);
//   },

//   setActive(){
//     this.element().classList.add('active');
//   }
// }

function Dom(selector) {

  this.element = () =>{
    return selectElement = document.querySelector(selector);
  },

  this.setActive = (setClass) => {

    if(setClass !== undefined)
      this.element().classList.add(setClass);
    else
      return alert('Por favor inserir uma classe')

  }
}

const li = new Dom('li:first-child');
li.setActive('active');

console.log(li.element())

