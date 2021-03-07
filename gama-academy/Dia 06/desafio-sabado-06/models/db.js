const Sequelize = require('sequelize');

const sequelize = new Sequelize('star_wars_people', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}