const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingridient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingridient;
  document.querySelector("#ingredients").appendChild(ingredientItem);
  console.log(ingridient);
});
