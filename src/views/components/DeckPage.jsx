const React = require("react");
const Layout = require("../Layout");
const { transform } = require("@babel/core");

module.exports = function DeckPage({ login, cards, deck }) {
  return (
    <Layout login={login}>
      <h2 className="animate">{deck.name} </h2>
      <div className="homeHref">
        <a href="/decks" className="backCategory">
          Вернуться к выбору категорий
        </a>
      </div>
      <div className="cardsContainer">
        {cards.map((card) => (
          <div className="flip-card">
            {card.result ? (
              <div className="flip-card-inner" style={{ transform: "none" }}>
                <div className="flip-card-front blur">
                  <h1>{card.enWord}</h1>
                  <button className="learnFrontCard" id={card.id}>
                    Изучено
                  </button>
                </div>

                <div className="flip-card-back blur">
                  <h1>{card.ruWord}</h1>
                  <button className="learnBackCard" id={card.id}>
                    Изучено
                  </button>
                </div>
              </div>
            ) : (
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>{card.enWord}</h1>
                  <button className="learnFrontCard" id={card.id}>
                    Изучено
                  </button>
                </div>

                <div className="flip-card-back">
                  <h1>{card.ruWord}</h1>
                  <button className="learnBackCard" id={card.id}>
                    Изучено
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <script defer src="/js/card.js" />
    </Layout>
  );
};
