function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBox = document.querySelector("[data-create]");
const destroyBoxes = document.querySelector("[data-destroy]");
const divBoxes = document.getElementById("boxes");

//Listeners
createBox.addEventListener("click", () => {
  createBoxes();
});

destroyBoxes.addEventListener("click", () => {
  cleanUpBoxes();
});

//Functions

function createBoxes() {
  const inputNumber = Number(document.querySelector("input").value);

  //Clean all the boxes - Important to start the creation process
  cleanUpBoxes();

  //Validation if the input number is a valid number
  if (
    isNaN(inputNumber) ||
    inputNumber < 1 ||
    inputNumber > 100 ||
    !Number.isInteger(inputNumber)
  ) {
    alert(
      `Wrong Number - Input ERROR: (${inputNumber}) - Enter a valid number between 1 and 100`
    );
    return;
  } else {
    for (let i = 0; i < inputNumber; i++) {
      const divBox = document.createElement("div");
      const divBoxSize = 30 + 10 * i;
      divBox.style.width = divBoxSize + "px";
      divBox.style.height = divBoxSize + "px";
      divBox.style.backgroundColor = getRandomHexColor();
      divBoxes.appendChild(divBox);
    }
  }
}

function cleanUpBoxes() {
  divBoxes.innerHTML = "";
}
