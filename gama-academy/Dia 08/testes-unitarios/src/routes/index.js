const {status} = require('../api/controller/app.controller')

const root = {
    method: 'GET',
    path: '/',
    handler: status
}

module.exports = [root]