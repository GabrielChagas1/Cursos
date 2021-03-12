const inert = require('@hapi/inert');
const vision = require('@hapi/vision');
const hapiSwagger = require('hapi-swagger');
const {version} = require("../../package.json");

const swagger = 
    {
        plugin: hapiSwagger,
        options: {
            title: "Gamabank - Event Loop",
            description: "projeto desenvolvido ahuahahua heheheeh",
            version: "1.0.0"
        }
    }

module.exports = [inert, vision, swagger]