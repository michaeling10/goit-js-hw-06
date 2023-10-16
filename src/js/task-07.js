const fontSizeControl = document.getElementById("font-size-control");
const textTaskControl = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
  const fontSizeText = fontSizeControl.value;
  textTaskControl.style.fontSize = fontSizeText + "px";
});
