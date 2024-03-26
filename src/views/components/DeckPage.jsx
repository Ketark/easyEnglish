const React = require('react');
const Layout = require('../Layout');

module.exports = function DeckPage({ login, cards }) {
return(
    <Layout login={login}>
        {/* <h1>Здесь будет название колоды </h1> */}
        <div className="card__side card__side--front">
        {cards.map((card) => 
         <div className="card__theme">
         <div className="card__theme-box" key={card.id} id={card.id}>
         <p className="card__title">{card.enWord}</p>
         </div>
         <button id={card.id}> Изучено </button>
        </div>)}
        </div>
    </Layout>
)
};