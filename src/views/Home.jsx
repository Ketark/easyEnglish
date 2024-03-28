const React = require("react");
const Layout = require("./Layout");

function Home({ title }) {
  return (
    <Layout title={title}>
      <div className="welcome-container">
        <div className="welcome-box">
          <div className="welcome-text-container">
            <h2 className="welcome-heading">Привет!</h2>
            <div className="imageContainer">
              <img className="image" src="/assets/image.png" alt="card" />
            </div>
            <p className="welcome-text">
              Зарегистрируйтесь или войдите, чтобы начать учить слова.
            </p>
            <div className="welcome-buttons">
              <a href="/register" className="welcome-button">
                Зарегистрироваться
              </a>
              <a href="/login" className="welcome-button">
                Войти
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Home;
