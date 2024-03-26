"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User, Status, Deck }) {
      this.belongsToMany(User, {
        through: Status,
        foreignKey: "card_id",
      });
      this.belongsTo(Deck, { foreignKey: "deck_id" });
    }
  }
  Card.init(
    {
      enWord: DataTypes.STRING,
      ruWord: DataTypes.STRING,
      deck_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
