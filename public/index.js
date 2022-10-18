import { createMainContent, fetchNew, createVoteElements } from './main.js';
import { createCommentsForm } from "./comments.js"
import { saveAll, restoreData } from "./restore.js"

const initializePage = () => {
  // Create container
  const container = document.createElement("main");
  container.className = "container";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  container.style.marginTop = "20px";

  const imageBox = document.createElement("section");
  imageBox.className = "image-box";

  const formElement = document.createElement("form");
  formElement.id = "comments-form";
  formElement.className = "form";
  formElement.method = "post";

  container.append(imageBox, formElement);
  document.body.append(container);
  
};

window.onload = () => {
  initializePage();
  createMainContent(); 
  createVoteElements();
  createCommentsForm();
  fetchNew();
  if (localStorage.getItem("currImg"))restoreData();
  saveAll();
};
