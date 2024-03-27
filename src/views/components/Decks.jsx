const React = require('react');
const Layout = require('../Layout');

module.exports = function Decks({ login, decks }) {
return(
    <Layout login={login}>
        <h1>Категории</h1>
        <div className="deckContainer">
        {decks.map((deck) => 
        
        <div className="deckOne" key={deck.id} id={deck.id}>

        <a href={`/decks/${deck.id}`}> <h2>{deck.name}</h2><img src={deck.cover} alt="photo" />
       
        
        </div>)}
        </div>
    </Layout>
)
};
 