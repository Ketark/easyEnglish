const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <div className="login-container">
        <h3>Введите свои данные:</h3>
        <form id="regForm" action="/register" method="POST">
          <div className="form-group">
            <label htmlFor="login">Логин:</label>
            <input type="text" id="login" name="login" placeholder="Придумайте ваш логин" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Введите ваш логин" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input type="password" id="password" name="password" placeholder="Введите ваш пароль" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Повторите пароль:</label>
            <input type="password" id="password2" name="password2" placeholder="Введите ваш пароль" required />
          </div>
          <button type="submit" className="login-button">Зарегистрироваться</button>
          <div className="regMsg"><br /></div>
        </form>
      </div>
      <script defer src="/js/reg.js" />
    </Layout>
  );
}

module.exports = Registration;
