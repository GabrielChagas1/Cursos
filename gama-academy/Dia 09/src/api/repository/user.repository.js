const database = require('../../helpers/database')

const save = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {

            const encrypt = await crypto.encryptPassword(user.password, null)
            user.salt = encrypt.salt
            user.password = encrypt.encryptedPassword
           
            const sqlStatement = `INSERT INTO users (username, password, salt) VALUES ("${user.username}", "${user.password}", "${user.salt}");`            
            const result = await database.execute(sqlStatement)

            resolve(result)
        } catch (error) {
            console.error(error)
            reject(error)      
        }
    })
}