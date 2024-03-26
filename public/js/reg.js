const form = document.querySelector('#regForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const inputs = Object.fromEntries(data);
  if (!inputs.login || !inputs.email || !inputs.password || !inputs.password2) {
    alert('Введите свои данные');
  } else {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      const result = await response.json();
      console.log('response', result);
      const msg = document.querySelector('.regMsg');
      if (result.err) {
        msg.innerText = result.err;
        msg.style.color = 'red';
      } else {
        msg.innerText = result.msg;
        msg.style.color = 'green';

        setTimeout(() => {
          window.location.href = '/decks';
        }, 300);
      }
    } catch (error) {
      console.log('Ошибка регистрации=>', error);
      alert('Ошибка регистрации!');
    }
  }
});