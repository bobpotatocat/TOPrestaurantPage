// console.log("testing from src/index.js!");
import { loadMenu } from "./menu";
import { loadContact } from "./contact.js";
import { loadHomePage } from "./homepage";

function createHeaderButtons() {
  let navButtons = document.createElement("div");

  let menuButton = document.createElement("button");
  menuButton.classList.add("navButton");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    clearTab();
    loadMenu();
  });

  let homeButton = document.createElement("button");
  homeButton.classList.add("navButton");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", () => {
    clearTab();
    loadHomePage();
  });

  let contactButton = document.createElement("button");
  contactButton.classList.add("navButton");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", () => {
    clearTab();
    loadContact();
  });

  navButtons.appendChild(menuButton);
  navButtons.appendChild(homeButton);
  navButtons.appendChild(contactButton);

  return navButtons;
}

function loadHeader() {
  let header = document.createElement("div");
  header.id = "header";
  let name = document.createElement("h1");
  name.textContent = "Mar's Dining Bowl";
  header.appendChild(name);
  header.appendChild(createHeaderButtons());

  //note header lives in body, not content div
  let body = document.body;
  body.insertBefore(header, body.firstChild);
  return body;
}

function clearTab() {
  let content = document.getElementById("content");
  content.remove();
  let newContent = document.createElement("div");
  newContent.id = "content";
  document.body.appendChild(newContent);
}

function setActiveButton(button) {
  let navButtons = document.getElementsByClassName("navButton");
  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].classList.remove("active");
  }
  button.classList.add("active");
}

loadHeader();
