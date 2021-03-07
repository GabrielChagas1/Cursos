const db = require('./db');



const People = db.sequelize.define('peoples',{
    name:{
        type: db.Sequelize.STRING,
        allowNull: false
    },

    homeworld:{
        type: db.Sequelize.STRING,
        allowNull: false

    },

    url:{
        type: db.Sequelize.STRING,
        allowNull: false

    }
});

module.exports = People;

// People.sync({force: true})