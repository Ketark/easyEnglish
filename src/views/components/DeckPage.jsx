const React = require('react');
const Layout = require('../Layout');

module.exports = function DeckPage({ login, cards }) {
return(
    <Layout login={login}>
        {/* <h1>Здесь будет название колоды </h1> */}
        <div class="card__side card__side--front">
        {cards.map((card) => 
         <div class="card__theme">
         <div class="card__theme-box" key={card.id} id={card.id}>
         <p class="card__title">{cards.enWord}</p>
         </div>
         <button id={card.id}> Изучено </button>
        </div>)}
        </div>
    </Layout>
)
};