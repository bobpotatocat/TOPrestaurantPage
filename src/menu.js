function createMenuItem(dishName, dishIngredients) {
  let el = document.createElement("div");
  el.classList.add("menuItem");
  let header = document.createElement("h2");
  header.textContent = dishName;
  let ingredients = document.createElement("p");
  ingredients.textContent = dishIngredients;
  el.appendChild(header);
  el.appendChild(ingredients);
  return el;
}

function createMenu() {
  let el = document.createElement("div");
  el.id = "Menu";
  let header = document.createElement("h1");
  header.textContent = "View our tasty doggo treats!";
  el.appendChild(header);
  el.appendChild(createMenuItem("rabbit ear", "dried rabbit ear, salt"));
  el.appendChild(
    createMenuItem("doggo bites", "flour, pork, chicken, eggs, emulsifier")
  );
  el.appendChild(
    createMenuItem("dental treats", "wheat, toothpaste, beef, hardeners")
  );
  return el;
}

function loadMenu() {
  let content = document.getElementById("content");
  content.appendChild(createMenu());
  return content;
}

export { loadMenu };
