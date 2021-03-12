const repository = require('../repository/user.repository')



const createAccount = async (newUser) => {


    //TODO: Verficar se usuario já existe

    //TODO: tmb senti falta de uns detalhezinhos como try  catch ou retornos de erros … mas ideia central ta top

     //TODO:uma ultima coisa, mas ai seria mais profissa mesmo de sacar… o seu resolve poderia retornar um new User pra garantir a especificação do modelo

    const user = await repository.find(newUser.username);

    if(!user)
        result = await repository.save(newUser)
        return result;

}


module.exports = { createAccount }