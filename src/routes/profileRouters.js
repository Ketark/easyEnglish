const profileRouter = require("express").Router();
const renderTemplate = require("../utils/renderTemplate");

const Profile = require("../views/Profile");

const { User, Deck, Card } = require("../../db/models");

profileRouter.get("/", async (req, res) => {
  try {
    const { login } = req.session;
    const decks = await Deck.findAll({
      raw: true,
      attributes: ["id", "name"],
    });
    const allCards = await Deck.findAll({
      raw: true,
      attributes: ["id"],
      include: {
        model: Card,
        raw: true,
        attributes: [],
      },
    });
    const decksDone = await Deck.findAll({
      raw: true,
      attributes: ["id", "name"],
      include: {
        model: User,
        where: { login },
        raw: true,
        attributes: [],
        through: { attributes: [] },
      },
    });
    for (let i = 0; i < decks.length; i++) {
      for (let k = 0; k < decksDone.length; k++) {
        if (decks[i].id === decksDone[k].id) {
          if (decks[i].result) {
            decks[i].result += 1;
          } else {
            decks[i].result = 1;
          }
        } else if (!decks[i].result) {
          decks[i].result = 0;
        }
      }
    }
    for (let i = 0; i < decks.length; i++) {
      for (let k = 0; k < allCards.length; k++) {
        if (decks[i].id === allCards[k].id) {
          if (decks[i].number) {
            decks[i].number += 1;
          } else {
            decks[i].number = 1;
          }
        }
      }
    }
    decks.map((deck) => (deck.done = (deck.result * 100) / deck.number));
    renderTemplate(Profile, { decks, login }, res);
  } catch (error) {
    console.log("Ошибка загрузки личного кабинета", error);
  }
});

profileRouter.post("/", async (req, res) => {
  const { name, enWord, ruWord } = req.body;
  try {
    if (name && enWord && ruWord) {
      const deck = await Deck.findOne({ where: { name } });
      Card.create({ enWord, ruWord, deck_id: deck.id });
      res.json({ status: "success" });
    }
  } catch (error) {
    console.log("Ошибка создания карточки", error);
  }
});

profileRouter.put("/", async (req, res) => {
  try {
    const { login } = req.session;
    const decks = await Deck.findAll({
      raw: true,
      attributes: ["id", "name"],
    });
    const allCards = await Deck.findAll({
      raw: true,
      attributes: ["id"],
      include: {
        model: Card,
        raw: true,
        attributes: [],
      },
    });
    const decksDone = await Deck.findAll({
      raw: true,
      attributes: ["id", "name"],
      include: {
        model: User,
        where: { login },
        raw: true,
        attributes: [],
        through: { attributes: [] },
      },
    });
    for (let i = 0; i < decks.length; i++) {
      for (let k = 0; k < decksDone.length; k++) {
        if (decks[i].id === decksDone[k].id) {
          if (decks[i].result) {
            decks[i].result += 1;
          } else {
            decks[i].result = 1;
          }
        } else if (!decks[i].result) {
          decks[i].result = 0;
        }
      }
    }
    for (let i = 0; i < decks.length; i++) {
      for (let k = 0; k < allCards.length; k++) {
        if (decks[i].id === allCards[k].id) {
          if (decks[i].number) {
            decks[i].number += 1;
          } else {
            decks[i].number = 1;
          }
        }
      }
    }
    decks.map((deck) => (deck.done = (deck.result * 100) / deck.number));
    res.json(decks);
  } catch (error) {
    console.log("Ошибка загрузки личного кабинета", error);
  }
});

module.exports = profileRouter;
