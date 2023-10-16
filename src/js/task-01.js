const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);
console.log("\n");

categories.forEach((category) => {
  // Get the header text (h2 tag) for the category
  const headerText = category.querySelector("h2").textContent;

  // Get the number of elements in the category (all nested li)
  const elements = category.querySelectorAll("li").length;

  // Display information in the console
  console.log(`Category : ${headerText}`);
  console.log(`Elements : ${elements}`);
  console.log("\n");
});
