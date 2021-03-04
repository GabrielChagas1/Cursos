let salarioBruto = 100000;
let salarioLiquido;

function calculadoraSalario(salarioBruto, callback){
    let liquido = 0;

    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;

    const descontos = inss + vr;

    liquido = salarioBruto - descontos;

    return callback(liquido);
}

salarioLiquido = calculadoraSalario(salarioBruto, (resultado) => {
    salarioLiquido = resultado
    console.log(`O salário liquido é ${salarioLiquido}`)
});