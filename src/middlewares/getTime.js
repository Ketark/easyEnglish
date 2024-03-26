function getTime(req, res, next) {
  console.log('\x1b[36m%s\x1b[0m', new Date().toLocaleString());
  next();
}

module.exports = getTime;
