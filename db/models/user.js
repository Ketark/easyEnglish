"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Card, Deck, Status }) {
      this.belongsToMany(Card, {
        through: Status,
        foreignKey: "user_id",
      });
      this.belongsToMany(Deck, {
        through: Status,
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      login: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
