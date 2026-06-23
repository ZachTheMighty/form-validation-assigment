export default function (country, postalCode) {
  const countries = {
    switzerland: {
      postalCode: "^(CH-)?\\d{4}$",
      errorMessage:
        "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
    },

    france: {
      postalCode: "^(F-)?\\d{5}$",
      errorMessage:
        "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
    },

    germany: {
      postalCode: "^(D-)?\\d{5}$",
      errorMessage:
        "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
    },

    netherlands: {
      postalCode: "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      errorMessage:
        "Dutch postal codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    },
  };

  if (postalCode.value.length === 0)
    postalCode.setCustomValidity("This field can't be empty");
  else if (
    !new RegExp(countries[country.value].postalCode).test(postalCode.value)
  )
    postalCode.setCustomValidity(countries[country.value].errorMessage);
  else postalCode.setCustomValidity("");
  postalCode.reportValidity();
}
