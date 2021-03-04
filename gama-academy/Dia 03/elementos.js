let poderes = [];

const invocarCapitaoPlaneta = (inicial, callback) => {
    poderes.push(inicial);
    callback(poderes)
}

invocarCapitaoPlaneta('terra', 
    invocarCapitaoPlaneta('fogo', 
    
        invocarCapitaoPlaneta('vento', 
            invocarCapitaoPlaneta('agua', 
                invocarCapitaoPlaneta('coração', (listaDePoderes) =>{
                    console.log('Pela união dos seus poderes, eu sou o capitão planeta')
                })
            )
        )
    )

)


if(elementos.length === 5){
    console.log(elementos);
}

