const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')
const User = require('./user')

class Movie extends Model{}

Movie.init({
    userId : {
        type : DataTypes.INTEGER
    },
    movieId : {
        type: DataTypes.INTEGER
    },
    movie : {
        type : DataTypes.JSON
        
    },
    isAdded : {
        type : DataTypes.BOOLEAN,
        defaultValue : false,
    }
} ,  { sequelize, modelName: 'Movie' })






module.exports = Movie