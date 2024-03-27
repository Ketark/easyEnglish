document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".flip-card-inner");

  containers.forEach((el) =>
    el.addEventListener("click", () => el.classList.toggle("active"))
  );
});

const learnFrontCard = document.querySelectorAll(".learnFrontCard");
learnFrontCard.forEach((button) => {
  button.addEventListener("click", async (event) => {
    try {
      const { target } = event;
      const response = await fetch(`/decks/card/${target.id}`, {
        method: "POST",
      });
      const result = await response.json();
      if (result.status) {
        target.parentNode.classList.add("blur");
        target.parentNode.parentNode.style = `
      transform: none;
      `;
      }
    } catch (error) {
      console.log(error);
    }
  });
});

const learnBackCard = document.querySelectorAll(".learnBackCard");
learnBackCard.forEach((button) => {
  button.addEventListener("click", (event) => {
    const { target } = event;
    target.parentNode.classList.add("blur");
    target.parentNode.parentNode.style = `
      transform: none;
      `;
  });
});
