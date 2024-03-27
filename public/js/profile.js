const addWordForm = document.getElementById("addWordForm");
const message = document.getElementById("messageAddWord");

addWordForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(addWordForm);
  const inputs = Object.fromEntries(data);
  if (!inputs.name || !inputs.enWord || !inputs.ruWord) {
    message.innerText = "Заполните все поля!";
    message.style.color = "red";
  }
  try {
    const response = await fetch("/profile/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const result = await response.json();
    if (result.status) {
      message.innerText = "Карточка создана!";
      message.style.color = "green";
      inputs.value = "";
      const responsePut = await fetch("/profile/", {
        method: "PUT",
      });
      const decks = await responsePut.json();
      console.log(decks);
      const category = document.getElementById("categories");
      category.innerHTML = `
      ${decks.map(
        (deck) => `
        <div key=${deck.id}>
          ${deck.name}: <progress max="100" value=${deck.done}></progress>
        </div>`
      )}
      `;
    }
    console.log("!!!");
  } catch (error) {
    console.log("Ошибка добавления карточки", error);
  }
});
