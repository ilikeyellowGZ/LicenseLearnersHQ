const username = document.getElementById("username");
const email = document.getElementById("email");
const btn = document.getElementById("submit-btn");
const form = document.getElementById("form");
const error = document.getElementById("error");
const unorderedList = document.getElementById("isGiveStress");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting normally

  error.classList.remove("hide");

  setTimeout(() => {
    window.location.href = "../myOwnCarousel/index.html";
  }, 3000);
});

const menuTrigger = document.getElementById("question-for-contact");

menuTrigger.addEventListener("click", () => {
  menuTrigger.style.display = "none";
  unorderedList.style.display = "block";
  unorderedList.style.transition = "all 1s ease";
});
