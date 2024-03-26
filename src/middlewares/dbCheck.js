const { sequelize } = require('../../db/models');

module.exports = async (req, res, next) => {
  try {
    await sequelize
      .authenticate()
      .then(() =>
        console.info(
          `\u001b[35mDatabase ${sequelize.getDatabaseName()} connected\u001b[37m`
        )
      );
    next();
  } catch (err) {
    console.log('ERROR in dbCheck function:', err);
  }
};
