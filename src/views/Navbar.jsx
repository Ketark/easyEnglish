const React = require('react');

function Navbar({ login }) {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">
        <img src="/assets/flash-card.png" alt="easyEnglish" style={{ width: '70px', height: 'auto' }} />
        </a>
        <ul className="nav-links">
          {login ? (
            <>
              <a className="greet">Привет, {login}!</a>
              <li><a href="/profile">Личный кабинет</a></li>
              <li><a href="/logout">Выйти</a></li>
            </>
          ) : (
            <>
              <li><a href="/login">Войти</a></li>
              <li><a href="/register">Регистрация</a></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

module.exports = Navbar;
