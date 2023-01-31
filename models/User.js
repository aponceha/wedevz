const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPwrd) {
    return bcrypt.compareSync(loginPwrd, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        len: [1],
      },
    },
    stateprovince: {
      type: DataTypes.STRING,
      validate: {
        len: [2],
      },
    },
    userpic: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],

      },
    },
    employer: {
      type: DataTypes.STRING,
      validate: {
        len: [1],
      },
    },
    job_title: {
      type: DataTypes.STRING,
      validate: {
        len: [1],
      },
    },
    bio: {
      type: DataTypes.TEXT('long'),
      validate: {
        len: [1],
      },
    },
    github: {
      type: DataTypes.STRING,
      validate: {
        len: [1],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
