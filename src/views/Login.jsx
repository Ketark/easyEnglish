const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      <div className="login-container">
        <h3>Авторизуйтесь:</h3>
        <form action="/login" method="POST" id="loginForm">
          <div className="form-group">
            <label htmlFor="login">Логин:</label>
            <input type="text" id="login" name="login" placeholder="Введите ваш логин" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input type="password" id="password" name="password" placeholder="Введите ваш пароль" required />
          </div>
          <button type="submit" className="login-button">Войти</button>
          <br />
          <br />
          <div className="logMsg">
            <div className="yet">
              Еще нет аккаунта?
              <a className="alog" href="/register">Зарегистрируйтесь!</a>
            </div>
          </div>
        </form>
      </div>
      <script defer src="/js/login.js" />
    </Layout>
  );
}

module.exports = Login;
