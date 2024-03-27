const React = require('react');
const Layout = require('../Layout');

module.exports = function Decks({ login, decks }) {
return(
    <Layout login={login}>
        <h1>Категории</h1>
        <div className="deckContainer">
        {decks.map((deck) => 
        
        <div className="deckOne" key={deck.id} id={deck.id}>

        <a href={`/decks/${deck.id}`}> <h2>{deck.name}</h2><img src="https://images.unsplash.com/photo-1621659911279-b08ce9ff421f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" />
       </a>
        
        </div>)}
        </div>
    </Layout>
)
};
 