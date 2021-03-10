const assert = require('chai').assert;
const faker = require('faker');
const myCrypto = require('../../src/helpers/myCrypto')


describe('Crypto Helper Tool', () =>{
    it('should be encrypt password', async () =>{
        const pass = 'I0yk0w04WYaFsZ_myIHgqz6NIYliCNiF'
        const expectedEncryptedPassword = '$2b$10$CFhxPbcy0Glrjq0/LPJn5.HaOYKSzAQXXnQetkW746RrKMz1jkPm2'
        const salt = '$2b$10$CFhxPbcy0Glrjq0/LPJn5.';

        const {encryptedPassword} = await myCrypto.encryptPassword(pass, salt);

        assert.equal(encryptedPassword, expectedEncryptedPassword)

    });

    it('should be return TRUE in compare passwords', async () => {
        const password =  faker.internet.password(32);

        const {salt, encryptedPassword} = await myCrypto.encryptPassword(password, null);

        const resultComparePasswords = await myCrypto.comparePassword(password, salt, encryptedPassword);

        assert.equal(resultComparePasswords, true)

    })


})