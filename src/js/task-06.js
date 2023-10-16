const inputValue = document.getElementById("validation-input");

inputValue.addEventListener("blur", () => {
  const lengthValueConfig = parseInt(
    inputValue.getAttribute("data-length"),
    20
  );

  if (inputValue.value.length === lengthValueConfig) {
    inputValue.classList.remove("invalid");
    inputValue.classList.add("valid");
  } else {
    inputValue.classList.remove("valid");
    inputValue.classList.add("invalid");
  }
});
