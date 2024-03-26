const deckRouter = require("express").Router();
const renderTemplate = require("../utils/renderTemplate");
const Decks = require("../views/components/Decks");
const DeckPage = require("../views/components/DeckPage");
const { User, Deck, Card } = require("../../db/models");

deckRouter.get("/", async (req, res) => {
  try {
    const { login } = req.session;
    const decks = await Deck.findAll({
      include: [
        {
          model: Card,
        },
      ],
    });

    renderTemplate(Decks, { login, decks }, res);
  } catch (error) {
    console.log("Ошибка вывода колод", error);
  }
});

deckRouter.get("/:id", async (req, res) => {
  try {
    const { login } = req.session;
    const cards = await Card.findAll({ where: { deck_id: req.params.id } });

    renderTemplate(DeckPage, { login, cards }, res);
  } catch (error) {
    console.log("Ошибка вывода карт", error);
  }
});

module.exports = deckRouter;
