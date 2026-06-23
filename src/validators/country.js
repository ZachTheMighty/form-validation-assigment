export default function (country) {
  if (country.value.length === 0)
    country.setCustomValidity("This field can't be left empty");
  else country.setCustomValidity("");
  country.reportValidity();
}
