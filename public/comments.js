import { saveAll } from "./restore.js";


export const createCommentsForm = () => {
  const commentDiv = document.createElement("div");
  commentDiv.className = "form form-child";

  const labelEl = document.createElement("label");
  labelEl.htmlFor = "comment";
  labelEl.innerText = "Comment:";
  
  const textArea = document.createElement("input");
  textArea.type = "text";
  textArea.placeholder = "Add a comment...";

  const submitBtn = document.createElement("input");
  submitBtn.id = "submit"
  submitBtn.type = "submit";

  const commentsList = document.createElement("ul");
  commentsList.id = "comments-list";

  document.querySelector("#comments-form").addEventListener("submit", event => {
    if (textArea.value.length <= 0) alert("You need to add a comment to submit!");
    else {
      const comment = document.createElement("li");
      comment.innerText = document.querySelector("input[type='text']").value
      commentsList.appendChild(comment);
      saveAll()
      document.querySelector("input[type='text']").value = "";
    }
    event.preventDefault();
  });

  commentDiv.append(labelEl, textArea, submitBtn);
  document.querySelector("#comments-form").append(commentDiv, commentsList)
}