const repository = require('../repository/user.repository')



const createAccount = async (newUser) => {


    //TODO: Verficar se usuario já existe
    const user = await repository.findOne(newUser.username);

    if(!user)
        const result = await repository.save(newUser)
        return result;

}


module.exports = { createAccount }