function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

btnColor.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
});
