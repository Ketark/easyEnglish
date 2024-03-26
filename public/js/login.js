const form = document.querySelector('#loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const inputs = Object.fromEntries(data);
  if (!inputs.login || !inputs.password) {
    alert('Введите свои данные');
  } else {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      const result = await response.json();
      const msg = document.querySelector('.logMsg');
      if (result.err) {
        msg.innerText = result.err;
        msg.style.color = 'red';
      } else {
        msg.innerText = result.text;
        msg.style.color = 'green';
        setTimeout(() => {
          window.location.href = '/decks';
        }, 1000);
      }
    } catch (error) {
      console.log('Ошибка авторизации=>', error);
      alert('Ошибка авторизации!');
    }
  }
});
