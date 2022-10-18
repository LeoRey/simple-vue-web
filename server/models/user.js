'use strict';
const {
  Model
} = require('sequelize');
const bcryptjs = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.MyHistory, {foreignKey: "UserId"})
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull :{
          msg: 'Username is required!'
        },
        notEmpty: {
          msg: 'Username is required!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          msg: 'Password is required !'
        },
        notEmpty: {
          msg: 'Password is required!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'E-mail is required!'
        },
        notEmpty: {
          msg: 'E-mail is required!'
        },
        isEmail: {
          msg: 'Email must be in email format!'
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
    }
  }, {
    hooks:{
      beforeCreate: function (User){
        User.password = bcryptjs.hashSync(User.password, 7)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};