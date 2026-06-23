export default function validateEmail(email) {
  const emailRegex = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

  if (email.value.length === 0)
    email.setCustomValidity("this field can't be left empty");
  else if (!emailRegex.test(email.value))
    email.setCustomValidity(
      "Please enter a valid email, or don't, what do I care",
    );
  else email.setCustomValidity("");

  email.reportValidity();
}
