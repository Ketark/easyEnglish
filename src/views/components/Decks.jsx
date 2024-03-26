const React = require('react');
const Layout = require('../Layout');

module.exports = function Decks({ login, decks }) {
return(
    <Layout login={login}>
        <h1>Категории</h1>
        <div className="deckContainer">
        {decks.map((deck) => 
        
        <div key={deck.id} id={deck.id}>
        <a href={`/decks/${deck.id}`}><h2>{deck.name}</h2></a>
        
        </div>)}
        </div>
    </Layout>
)
};
 