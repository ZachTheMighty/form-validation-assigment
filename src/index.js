import "./index.css";
import validateEmail from "./validators/email.js";

const form = document.querySelector("form");
const email = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateEmail(email);
  validateCountry(country);
});

email.addEventListener("input", () => validateEmail(email));
