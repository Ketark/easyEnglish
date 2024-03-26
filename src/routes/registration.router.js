const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");
const renderTemplate = require("../utils/renderTemplate");
const Registration = require("../views/Registration");

const router = express.Router();

router.get("/", (req, res) => {
  renderTemplate(Registration, {}, res);
});

router.post("/", async (req, res) => {
  try {
    const { login, email, password, password2 } = req.body;
    if (password !== password2) {
      res.json({ err: "Пароли не совпадают" });
    }
    const emails = await User.findOne({ where: { email } });
    const user = await User.findOne({ where: { login } });
    if (user) {
      res.json({ err: `Пользователь c логином ${login} уже существует` });
    } else if (emails) {
      res.json({ err: `Пользователь c почтой ${email} уже существует` });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        login,
        password: hash,
        email,
      });
      req.session.login = newUser.login;
      req.session.save(() => {
        res.json({ msg: "Регистрация прошла успешно" });
      });
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});

module.exports = router;
