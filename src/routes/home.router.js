const express = require('express');

const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/Home');
// const { Product } = require('../../db/models');

const router = express.Router();

router.get('/', (req, res) => {
  renderTemplate(Home, {}, res);
});

module.exports = router;
