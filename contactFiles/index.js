const username = document.getElementById("username");
const email = document.getElementById("email");
const btn = document.getElementById("submit-btn");
const form = document.getElementById("form");
const error = document.getElementById("error");
const unorderedList = document.getElementById("isGiveStress");

form.addEventListener("submit", (e) => {
  let message = [];
  if (username.value === "" || username.value === null) {
  }
  if (message.length > 0) {
    e.preventDefault();
    error.innerText = message.join(" , ");
  }
});

const menuTrigger = document.getElementById("question-for-contact");

menuTrigger.addEventListener("click", () => {
  menuTrigger.style.display = "none";
  unorderedList.style.display = "block";
  unorderedList.style.transition = "all 1s ease";
});
