import validateEmpty from "./empty.js";

export default function (password) {
  if (password.value.length < 6)
    password.setCustomValidity("password must be at least 6 characters");
  else if (password.value.length > 12)
    password.setCustomValidity("password can't exceed 12 characters");
  else {
    password.setCustomValidity("");
  }

  validateEmpty(password);
}
