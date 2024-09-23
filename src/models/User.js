const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // first letter of model in capital letter and singular      //  singular and all lower case
const User = sequelize.define('user', {
    // define columns
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
        
    },
    birthday: {
        type: DataTypes.STRING,
        
    },	
});

module.exports = User;