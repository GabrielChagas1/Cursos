const Joi = require('joi')

const loginRequestDTO = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required
    }).label('loginRequestDTO');

const loginResponseDTO = Joi.object({
        auth: Joi.bool().required(),
        token: Joi.string().required()
    }).label('loginResponseDTO');

module.exports = {loginResponseDTO, loginRequestDTO}