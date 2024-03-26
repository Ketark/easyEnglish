const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        res.redirect('/');
      } else {
        res.clearCookie('solo');
        res.redirect('/');
      }
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

module.exports = router;
