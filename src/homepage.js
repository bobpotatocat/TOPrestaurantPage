function createHomeContent() {
  let content = document.createElement("div");
  content.id = "homeContent";

  let dogImg = document.createElement("img");
  dogImg.src = "../dog.jpeg";

  let topText = document.createElement("div");
  topText.id = "home-topText";
  let p2 = document.createElement("p");
  p2.textContent =
    "licking things and serving the best dog treats in town since 20-SQUIRREL!";
  topText.appendChild(p2);

  let bottomText = document.createElement("div");
  bottomText.id = "home-bottomText";
  let p1 = document.createElement("p");
  p1.textContent = "For doggos, by doggos. order now.";
  bottomText.appendChild(p1);

  content.appendChild(topText);
  content.appendChild(dogImg);
  content.appendChild(bottomText);

  return content;
}

function loadHomePage() {
  let content = document.getElementById("content");
  content.appendChild(createHomeContent());
  return content;
}

export { loadHomePage };
