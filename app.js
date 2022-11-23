"use strict";

const hamBurger = document.querySelector(".h-burger-container");
const modalContainer = document.querySelector(".modal-container");
const cancelBtn = document.querySelector(".cancel-btn-container");
const groupTaskBtn = document.querySelector(".g-task");
const personalTaskBtn = document.querySelector(".p-task");
const submittedBtn = document.querySelector(".submitted-task-btn");

hamBurger.addEventListener("click", function () {
  // console.log(modalContainer);
  modalContainer.style.display = "block";
});

cancelBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

groupTaskBtn.addEventListener("click", function () {
  groupTaskBtn.classList.replace("g-task", "g-task-updated");
  personalTaskBtn.classList.replace("p-task", "p-task-updated");
});

personalTaskBtn.addEventListener("click", function () {
  if (personalTaskBtn.classList.contains("p-task-updated")) {
    personalTaskBtn.classList.replace("p-task-updated", "p-task");
    groupTaskBtn.classList.replace("g-task-updated", "g-task");
  }
});
