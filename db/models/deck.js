"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate({ User, Status, Card }) {
      this.hasMany(Card, { foreignKey: "deck_id" });
      this.belongsToMany(User, {
        through: Status,
        foreignKey: "deck_id",
      });
    }
  }
  Deck.init(
    {
      name: DataTypes.STRING,
      cover: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Deck",
    }
  );
  return Deck;
};
