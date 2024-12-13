import { loginUser } from "./utils.js";

const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const showPassCheckbox = document.getElementById("remember");
const errorContainer = document.getElementById("error");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue.length || !passwordValue.length) {
    alert("Please fill in both fields.");
    return;
  }

  try {
    await loginUser({ emailValue, passwordValue });
    errorContainer.textContent = "";
    alert("Login successful!");
    emailInput.value = "";
    passwordInput.value = "";
  } catch (error) {
    errorContainer.textContent = error;
  }

});

showPassCheckbox.addEventListener("change", () => {
  if (showPassCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
