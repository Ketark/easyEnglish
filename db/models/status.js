"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {}
  }
  Status.init(
    {
      user_id: DataTypes.INTEGER,
      card_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Status",
    }
  );
  return Status;
};
