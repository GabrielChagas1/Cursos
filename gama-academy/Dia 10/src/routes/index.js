const Joi = require('joi')
const { status } = require('../api/controllers/app.controller')
const authcontroller = require('../api/controllers/auth.controller')
const usercontroller = require('../api/controllers/user.controller')

const {loginRequestDTO, loginResponseDTO } = require('../api/models/dto/auth.dto')

const root = {
    method: 'GET',
    path: '/',
    handler: status,
    options: {
        tags: ['api'],
        description: 'Verificação do status da aplicação',
        notes: 'Pode ser utilizado sempre que outra aplicação estiver monitorando'
    }
}

const login = {
    method: 'POST',
    path: '/login',
    handler: authcontroller.login,
    options: {
        tags: ['api', 'login'],
        description: 'Rota de autenticação',
        notes: 'Anotações da rota',
        validate:{
            payload: loginRequestDTO
        },
        response: {
            status:{
                200: loginResponseDTO,
                400: Joi.any()
            }
        }
    }
}

const validate = {
    method: 'GET',
    path: '/login/verify',
    handler: authcontroller.validate
}

const newaccount = {
    method: 'POST',
    path: '/signup',
    handler: usercontroller.newAccount
}


module.exports = [ root, login, validate, newaccount ]