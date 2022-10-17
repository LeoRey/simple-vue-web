'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Category, {foreignKey: "CategoryId"})
      Item.hasMany(models.MyHistory, {foreignKey: "ItemId"})
    }
  }
  Item.init({
    name: {
      type:DataTypes.STRING
    },
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};