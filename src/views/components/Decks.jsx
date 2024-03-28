const React = require("react");
const Layout = require("../Layout");

module.exports = function Decks({ login, decks }) {
  return (
    <Layout login={login}>
      <h1 className="animate">Категории</h1>
      <div className="deckContainer">
        {decks.map((deck) => (
          <div className="deckOne" key={deck.id} id={deck.id}>
            <a href={`/decks/${deck.id}`} className="categoryTitle">
              {" "}
              <h2>{deck.name}</h2>
              <img src={deck.cover} alt="photo" style={{borderRadius: "50px"}} />
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};
