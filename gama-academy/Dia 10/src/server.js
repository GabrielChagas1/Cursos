const Hapi = require('@hapi/hapi')
require('./configs/env')

const routes = require('./routes')

const swagger = require('./configs/swagger')

const server = async () => {

    const hapiServer = Hapi.server({
        port: process.env.PORT || 3333,
        host: process.env.HOST || 'localhost'
    })

    await hapiServer.register(swagger)
    hapiServer.route(routes)

    return hapiServer

}

process.on('unhandledRejection', err => {
    console.log('---->  Deu ruim !')
    console.error(err)
    process.exit(1)
})

module.exports = server()