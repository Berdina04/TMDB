const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')
const User = require('./user')

class Movie extends Model{}

Movie.init({
    userId : {
        type : DataTypes.INTEGER
    },
    movie : {
        type : DataTypes.STRING
        
    }
} ,  { sequelize, modelName: 'Movie' })






module.exports = Movie