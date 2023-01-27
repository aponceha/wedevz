const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { Project } = require('.');

Technology.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        referece: {
            model: 'user',
            key: 'id'
        }
    },
    project_id: {
        type: DataTypes.INTEGER,
        referece: {
            model: 'project',
            key: 'id'
        }
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Technology',

    }
);

module.exports = Technology;
