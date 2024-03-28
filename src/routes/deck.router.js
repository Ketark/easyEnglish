const deckRouter = require("express").Router();
const renderTemplate = require("../utils/renderTemplate");
const Decks = require("../views/components/Decks");
const DeckPage = require("../views/components/DeckPage");
const { User, Deck, Card, Status } = require("../../db/models");

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
    const cards = await Card.findAll({
      raw: true,
      where: { deck_id: req.params.id },
    });
    const cardsDone = await Card.findAll({
      raw: true,
      where: { deck_id: req.params.id },
      attributes: ["id"],
      include: {
        model: User,
        where: { login },
        attributes: [],
        through: { attributes: [] },
      },
    });
    for (let i = 0; i < cards.length; i++) {
      for (let k = 0; k < cardsDone.length; k++) {
        if (cards[i].id === cardsDone[k].id) {
          cards[i].result = "done";
        }
      }
    }
    const deck = await Deck.findOne({ where: { id: req.params.id } });

    renderTemplate(DeckPage, { login, cards, deck }, res);
  } catch (error) {
    console.log("Ошибка вывода карт", error);
  }
});

deckRouter.post("/card/:id", async (req, res) => {
  try {
    const { userId } = req.session;
    const card = await Card.findOne({ where: { id: req.params.id } });
    const status = await Status.findOne({
      where: { user_id: userId, card_id: card.id },
    });
    if (!status) {
      await Status.create({
        user_id: userId,
        card_id: card.id,
        deck_id: card.deck_id,
      });
      res.json({ status: "success" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = deckRouter;
