const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);
console.log("\n");

categories.forEach((category) => {
  const headerText = category.querySelector("h2").textContent;
  const elements = category.querySelectorAll("li").length;

  console.log(`Category : ${headerText}`);
  console.log(`Elements : ${elements}`);
  console.log("\n");
});
