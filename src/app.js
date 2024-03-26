require("@babel/register");
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const path = require("path");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const deckRouter = require("./routes/deck.router");
const getTime = require("./middlewares/getTime");
const checkDbConnection = require("./middlewares/dbCheck");
const { secureRout, checkUser } = require("./middlewares/common");

const app = express();
const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: "cookieName",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Cucumber",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 1000 * 60 * 60,
    httpOnly: true,
  },
};

app.use(morgan("dev"));
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(getTime);
// app.use(checkDbConnection);
app.use(session(sessionConfig));

app.use("/decks", deckRouter);
app.get("/", async (req, res) => {
  res.send("work");
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
