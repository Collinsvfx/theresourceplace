"use strict";

const userId = document.getElementById("your-ID");
const userPassword = document.getElementById("your-Password");

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

let timeOut;
let alertMsg;

// Login checker
function userCheck(e) {
  e.preventDefault();
  // check input field
  if (userId.value === "" && userPassword.value === "") {
    alertMsg = `
        <div class="alert-user-block d-flex justify-content-center align-items-center">
          <p class="alert-user-text">Incorrect login details</p>
        </div>
    `;
    const passBox = document.querySelector(".pass-box");
    passBox.insertAdjacentHTML("afterend", alertMsg);
    timeOut = setTimeout(() => {
      document.querySelector(".alert-user-block").remove();
    }, 2000);
  } else if (userId.value === "" || userPassword.value === "") {
    alertMsg = `
    <div class="alert-user-block d-flex justify-content-center align-items-center">
      <p class="alert-user-text">Incorrect login details</p>
    </div>
`;
    const passBox = document.querySelector(".pass-box");
    passBox.insertAdjacentHTML("afterend", alertMsg);
    timeOut = setTimeout(() => {
      document.querySelector(".alert-user-block").remove();
    }, 2000);
  } else {
    for (let i = 0; i < theUserIds.length; i++) {
      for (let p = 0; p < theUserPass.length; p++) {
        const y = userPassword.value.toLocaleLowerCase();
        const passBox = document.querySelector(".pass-box");

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
}

document.querySelector(".login-btn").addEventListener("click", userCheck);
