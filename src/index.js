import "./index.css";
import validateEmail from "./validators/email.js";
import validatePostal from "./validators/postal.js";
import validatePassword from "./validators/password.js";
import validateConfrim from "./validators/confirm.js";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const postal = document.querySelector("#postal");

const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateEmail(email);
  validatePostal(country, postal);
  validatePassword(password);
  validateConfrim(password, confirm);
});

email.addEventListener("input", () => validateEmail(email));
postal.addEventListener("input", () => validatePostal(country, postal));
password.addEventListener("input", () => validatePassword(password));
confirm.addEventListener("input", () => validateConfrim(password, confirm));
