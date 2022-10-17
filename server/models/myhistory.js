'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MyHistory.belongsTo(models.Item, {foreignKey: "ItemId"})
      MyHistory.belongsTo(models.User, {foreignKey: "UserId"})
    }
  }
  MyHistory.init({
    UserId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MyHistory',
  });
  return MyHistory;
};