const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');
const Login = require('../views/Login');

const router = express.Router();

router.get('/', (req, res) => {
  renderTemplate(Login, {}, res);
});

router.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (!user) {
      res.json({ err: 'Пользователь не существует' });
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        req.session.login = user.login;
        req.session.userId = user.id;
        req.session.save(() => {
          res.json({
            text: 'Авторизация прошла успешно',
            userId: user.id,
          });
        });
      } else {
        res.json({ err: 'Неверный пароль' });
      }
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});

module.exports = router;
