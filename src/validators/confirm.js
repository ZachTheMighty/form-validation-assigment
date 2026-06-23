import validateEmpty from "./empty.js";

export default function (password, confirm) {
  if (confirm.value.length < 6)
    confirm.setCustomValidity("password must be at least 6 characters");
  else if (confirm.value.length > 12)
    confirm.setCustomValidity("password can't exceed 12 characters");
  else if (confirm.value !== password.value)
    confirm.setCustomValidity("Please retype the password correctly");
  else {
    confirm.setCustomValidity("");
  }

  validateEmpty(confirm);
}
