const React = require("react");
const Layout = require("./Layout");

module.exports = function Profile({ decks, progress, login }) {
  return (
    <Layout login={login}>
      <div className="homeHref">
        <a href="/decks">
          <h3>Вернуться к выбору категорий</h3>
        </a>
      </div>
      <div className="profile-container">
        <div className="progress-section">
          <h1>Ваш прогресс в категориях:</h1>
          <div id="categories">
            {decks.map((deck) => (
              <div key={deck.id}>
                <div className="categoryOne">{deck.name}: Выполнено на {Math.round(deck.done)}%</div>
                <progress max="100" value={deck.done}></progress>
                <div>{Math.round(deck.done)}</div>
                <br/>
              </div>
            ))}
          </div>
        </div>
        <div className="create-card-section">
          <h1>Создать новую карточку:</h1>
          <form id="addWordForm">
            <h3>Выберете категорию:</h3>
            <select name="name">
              <option></option>
              {decks.map((deck) => (
                <option>{deck.name}</option>
              ))}
            </select>
            <h3>Введите слово на английском:</h3>
            <input type="text" name="enWord" />
            <h3>Введите слово на русском:</h3>
            <input type="text" name="ruWord" />
            <br />
            <button type="submit" id="addWord">
              Добавить
            </button>
            <div id="messageAddWord"></div>
          </form>
        </div>
      </div>
      <script defer src="/js/profile.js" />
    </Layout>
  );
};
