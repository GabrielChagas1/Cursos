// UUID => Universally unique identifier

// function enviarEmail(para, id, assunto, texto){
//     // biblioteca de envio de e-mail

//     console.log(para, id, assunto, texto);
// }


// class EnviarEmailParaUsuario{
//     send(){
//         enviarEmail('gabriel@gmail.com', '9899', 'Olá!', 'tudo bem');
//     }
// }


interface dadosDeEnvioEmail{
    para: string, 
    id: string, 
    assunto: string, 
    texto: string
}


function enviarEmail(dados: dadosDeEnvioEmail){
    console.log(dados.para, dados.id, dados.assunto, dados.texto);
}

class EnviarEmailParaUsuario{
    send(){
        enviarEmail({
            para: 'gabriel@gmail.com', 
            id: '8fd46b86-7515-11eb-9439-0242ac130002', 
            assunto: 'Olá!', 
            texto: 'Tudo bem ?'})
    }
}

// Desestruturar

// function enviarEmail({para, id, assunto, texto} : dadosDeEnvioEmail){
//     console.log(para, id, assunto, texto);
// }
