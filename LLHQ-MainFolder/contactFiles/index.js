const username = document.getElementById("username");
const email = document.getElementById("email");
const btn = document.getElementById("submit-btn");
const form = document.getElementById("form");
const error = document.getElementById("error");
const unorderedList = document.getElementById("isGiveStress");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting normally

  error.classList.remove("hide");
  const optionsRadioButtons = document.querySelectorAll(
    'input[name="main-radio-input"]'
  );

  let selectedValue = null;

  // Loop through the radio buttons to find the selected one
  optionsRadioButtons.forEach(function (radioButton) {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
    }
  });

  // Check if a value was selected
  if (selectedValue !== null) {
    console.log("Selected gender: " + selectedValue);
  } else {
    alert("Please select a gender.");
  }
  /* setTimeout(() => {
    window.location.href = "../myOwnCarousel/index.html";
  }, 3000); */
});

const menuTrigger = document.getElementById("question-for-contact");

menuTrigger.addEventListener("click", () => {
  menuTrigger.style.display = "none";
  unorderedList.style.display = "block";
  unorderedList.style.transition = "all 1s ease";
});

function sendEmail() {
  (function () {
    emailjs.init("iR9VPYJmH1lmfLk6Q");
  })();

  let params = {
    to: "licenselearnershq@outlook.com",
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  let serviceId = "service_fcraw7k";
  let templateId = "template_8haki27";

  emailjs.send(serviceId, templateId, params).then((res) => {
    /* error.style.display = "flex"; */
    console.log("email usc");
  });
}
