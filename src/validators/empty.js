export default function (input) {
  if (input.value.length === 0)
    input.setCustomValidity("This field cannot be empty");
  input.reportValidity();
}
