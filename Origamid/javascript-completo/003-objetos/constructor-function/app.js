function Carro(marca = 'Marca', preco = 0){
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = new Carro('Fiat', 3000);


console.log(honda, fiat); 