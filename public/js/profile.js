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
      document.querySelectorAll("input").forEach((el) => (el.value = ""));
      document.querySelectorAll("select").forEach((el) => (el.value = ""));
      console.log(inputs);
      const responsePut = await fetch("/profile/", {
        method: "PUT",
      });
      const decks = await responsePut.json();
      const category = document.getElementById("categories");
      category.innerHTML = "";
      decks.forEach((deck) => {
        const string = document.createElement("div");
        string.innerHTML = `${deck.name}: <progress max="100" value=${deck.done}></progress>`;
        string.setAttribute("key", deck.id);
        category.appendChild(string);
      });
    }
  } catch (error) {
    console.log("Ошибка добавления карточки", error);
  }
});
