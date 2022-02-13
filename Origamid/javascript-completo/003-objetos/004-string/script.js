// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Taxa Cliente',
    valor: 'R$ 49',
  },
];

let taxa = 0;
let recebimento = 0;

// transacoes.forEach((item) => item.descricao.split(' ')[0] == 'Taxa' ? taxa += Number(item.valor.split(' ')[1]): recebimento += Number(item.valor.split(' ')[1]));
transacoes.forEach((item) => item.descricao.slice(0, 4) === 'Taxa' ? taxa += +item.valor.replace('R$ ', '') : recebimento += +item.valor.replace('R$ ', ''));
console.log(taxa);
console.log(recebimento)




// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const array = transportes.split(';');
console.log(array)

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
html = html.split('span').join('a');
console.log(html)


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(-1));


// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0;
transacoes2.forEach((item) => item.trim().toLowerCase().includes('taxa') ? totalTaxas++ : null);
console.log(totalTaxas)


