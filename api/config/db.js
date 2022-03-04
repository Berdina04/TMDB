const Sequelize = require('sequelize');
const db = new Sequelize('tmbd' , null, null, {
    host : 'localhost',
    dialect: 'postgres',
    logging : false
})


module.exports = db