const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(loginPwrd) {
    console.log("Login from checkPassword", loginPwrd);
    console.log(this.password);
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
      allowNull: true,
      validate: {
        len: [1],
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1],
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1],
      },
    },

    user_pic: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    user_technology: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1],
      },
    },
    education: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    employer: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    bio: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "User",
  }
);

module.exports = User;
