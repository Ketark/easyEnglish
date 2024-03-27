const React = require('react');

function Navbar({ login }) {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">
        <img src="/assets/flash-card.png" alt="easyEnglish" style={{ width: '70px', height: 'auto' }} />
        </a>
        <div className="center-text"><img src="/assets/text.png" alt="easyEnglish" style={{ width: 'auto', height: '80px' }} /></div>
        <ul className="nav-links">
          {login ? (
            <>
              <a className="greet">Привет, {login}!</a>
              <li><a href="/profile">Личный кабинет</a></li>
              <li><a href="/logout">Выйти</a></li>
            </>
          ) : (
            <>
              <li><a href="/login" ><img  src="/assets/sign-in.png" alt="easyEnglish" style={{ paddingRight: '5px', marginTop:'0px', verticalAlign: 'middle', height: '24px', width: '24px' }} />
              <span style={{ verticalAlign: 'middle' }}>Войти</span>
              </a></li>
              <li><a href="/register"><img  src="/assets/reg.png" alt="easyEnglish" style={{ paddingRight: '5px', marginTop:'0px', verticalAlign: 'middle', height: '24px', width: '24px' }} />
              <span style={{ verticalAlign: 'middle' }}>Регистрация</span>
                </a></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

module.exports = Navbar;
