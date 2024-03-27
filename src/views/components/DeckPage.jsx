const React = require('react');
const Layout = require('../Layout');

module.exports = function DeckPage({ login, cards, deck }) {
return(
    <Layout login={login}>
        <h1>{deck.name} </h1>
        <div className="cardsContainer">
        {cards.map((card) => 
        <div className="flip-card">
         <div className="flip-card-inner">  
         <div className="flip-card-front">
           <h1>{card.enWord}</h1>
           <button className="learnFrontCard" id={card.id}>Изучено</button>
         </div>
         
         <div className="flip-card-back">
           <h1>{card.ruWord}</h1>
           <button className="learnBackCard" id={card.id}>Изучено</button>
         </div>    
         </div>
       </div>)}
       </div>
       <script defer src="/js/card.js" />
    </Layout>
)
};