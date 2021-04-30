'use stric'

/**
 * ! Escopo de função
 * 
 * * Váriaveis declaradas dentro de funções não são acessadas fora das mesmas.
 * * Escopo evita o conflito entre nomes
 * 
 * * Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções
 */

  /**
   * ! Escopo de bloco
   * 
   * * Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco
   *  ! var vaza o bloco => hoisting
   * 
   * 
   * ? quando um objeto está como const eu consigo alterar alguma propriedade, mas eu não consigo alterar o "tipo" do objeto.
   * 
   * 
   */

function mostarCarro(){
  let carro = 'fusca';
  console.log(carro); 
}

mostarCarro(); //fusca no console
// console.log(carro) //Erro, carro is not defined


if(true){
  const mes = 'janeiro';
  console.log(mes);
}
// Por qual motivo o código abaixo retorna com erros?

{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);