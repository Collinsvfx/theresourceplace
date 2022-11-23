"use strict";

const modalBtn = document.querySelector(".h-burger-container");
const modalContainer = document.querySelector(".modal-container");
const cancelBtn = document.querySelector(".cancel-btn-container");
const groupTaskBtn = document.querySelector(".g-task");
const personalTaskBtn = document.querySelector(".p-task");
const submittedBtn = document.querySelector(".submitted-task-btn");
const userId = document.getElementById("your-ID");
const userPassword = document.getElementById("your-Password");
const loginBtn = document.querySelector(".loginin-btn");

// USERS
const user1 = {
  userID: 13041997,
  password: "collins5670",
};

const user2 = {
  userID: 13041995,
  password: 123456789,
};

const accounts = [user1, user2];

let theUserIds = [];
let theUserPass = [];

const userIds = accounts.forEach((id) => {
  theUserIds.push(id.userID);
});

const userPass = accounts.forEach((pass) => {
  theUserPass.push(String(pass.password));
});

// Login checker
function userCheck() {
  for (let i = 0; i < theUserIds.length; i++) {
    for (let p = 0; p < theUserPass.length; p++) {
      const y = userPassword.value.toLocaleLowerCase();

      if (
        theUserIds[i] === Number(userId.value) &&
        theUserPass[p] === String(y)
      ) {
        // console.log("asasa");
        location.href = "welcome_screen.html";
      }
    }
  }
}

loginBtn.addEventListener("click", userCheck);

modalBtn.addEventListener("click", function () {
  console.log(modalContainer);
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
