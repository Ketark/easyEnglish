const React = require('react');
const Layout = require('./Layout');

function Home({ title }) {
  return (
    <Layout title={title}>
     <div className="welcome-container">
        <div className="welcome-box">
          <h2>Привет! <a href="/register">Зарегистрируйтесь</a> или <a href="/login">войдите</a>.</h2>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Home;
