import "./index.css";
import validateEmail from "./validators/email.js";
import validateCountry from "./validators/country.js";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateEmail(email);
  validateCountry(country);
});

email.addEventListener("input", () => validateEmail(email));
country.addEventListener("input", () => validateCountry(country));
