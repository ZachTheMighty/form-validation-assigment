import "./index.css";
import validateEmail from "./validators/email.js";

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const email = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateEmail(email);
});

email.addEventListener("input", () => validateEmail(email));
