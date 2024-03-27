document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".flip-card-inner");

  containers.forEach((el) =>
    el.addEventListener("click", () => el.classList.toggle("active"))
  );
});

const learnFrontCard = document.querySelectorAll(".learnFrontCard");
learnFrontCard.forEach((button) => {
  button.addEventListener("click", (event) => {
    const { target } = event;
    


  });
});

const learnBackCard = document.querySelectorAll(".learnBackCard");
