import "./index.css";
import validateEmail from "./validators/email.js";
import validatePostal from "./validators/postal.js";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const postal = document.querySelector("#postal");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateEmail(email);
  validatePostal(country, postal);
});

email.addEventListener("input", () => validateEmail(email));
postal.addEventListener("input", () => validatePostal(country, postal));
