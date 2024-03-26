const deckRouter = require("express").Router();
const renderTemplate = require("../utils/renderTemplate");
const Decks = require("../views/components/Decks");
const DeckPage = require("../views/components/DeckPage");
const { User, Deck, Card } = require("../../db/models");

deckRouter.get("/", async (req, res) => {
  try {
    const decks = await Deck.findAll({
      include: [
        {
          model: Card,
        },
      ],
    });

    renderTemplate(Decks, { decks }, res);
  } catch (error) {
    console.log("Ошибка вывода колод", error);
  }
});

deckRouter.get("/:id", async (req, res) => {
  try {
    const cards = await Card.findAll({ where: { deck_id: req.params.id } });

    renderTemplate(DeckPage, { cards }, res);
  } catch (error) {
    console.log("Ошибка вывода карт", error);
  }
});

module.exports = deckRouter;
