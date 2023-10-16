let counterValue = 0;

const valueSpan = document.getElementById("value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
  } else {
    alert("There is nothing.. You must increase the counter");
  }
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});
