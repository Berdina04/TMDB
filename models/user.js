const { DataTypes, Model, ARRAY, STRING } = require('sequelize');
const sequelize = require('../config/db')
const crypto = require('crypto')

class User extends Model {}

User.init({
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING

    },
    favs : {
        type : DataTypes.ARRAY(DataTypes.JSON)
    },
    salt: {
        type: DataTypes.STRING
    },

}, { sequelize, modelName: 'User' })


// Password hashing
User.beforeCreate((user) => {
    user.salt = crypto.randomBytes(20).toString('hex')
    user.password = user.hashPassword(user.password)
  });

User.prototype.hashPassword = function (password) {
    return crypto.createHmac('sha1' , this.salt).update(password).digest('hex')
}

User.prototype.validPassword = function(passwordEnLogin){
    console.log([this.password , this.hashPassword(passwordEnLogin)])
     return this.password === this.hashPassword(passwordEnLogin)
}

module.exports = User