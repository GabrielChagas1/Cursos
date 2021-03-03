const mesesAno = ['janeiro', 'fevereiro', 'março', 'abriel', 'maio', 'junho', 'julho', 'agosto',
'setembro', 'outubro', 'novembro'];

// adicionando o mês de dezembro
mesesAno.push('dezembro');

// filtrando os meses que começam com a letra J
const filterMeses = mesesAno.filter((mes) => mes.substr(0, 1) === 'j');

// recuperando o primeiro registro que começa com 'JU'
const findMeses = mesesAno.find((mes) => mes.substr(0, 2) === 'ju');

// exibindo um objeto com o mes e o tamanho do mes que terminam com a letra o
const mapaMeses = mesesAno.map((mes) => {
    if(mes.substr(mes.length - 1, 1) === 'o'){
        return {
            mes,
            length: mes.length
        }
    }
})



console.log(filterMeses);
console.log(findMeses);
console.log(mapaMeses);