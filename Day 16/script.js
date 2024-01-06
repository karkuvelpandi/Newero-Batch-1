const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const conformPassword = document.getElementById("conformPassword");
//
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const conformPasswordError = document.getElementById("conformPasswordError");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkForm();
});

function checkForm() {
  const usernameValue = username.value;
  const passwordValue = password.value;
  const conformPasswordValue = conformPassword.value;
  //   Username validation
  if (usernameValue.length < 5) {
    usernameError.innerText = "Please enter minimum 5 characters";
  } else {
    usernameError.innerText = "";
  }

  //   Password
  if (passwordValue.length < 5) {
    passwordError.innerText = "Please enter minimum 5 characters";
  } else {
    passwordError.innerText = "";
  }
  //   Conform password
  if (passwordValue !== conformPasswordValue) {
    conformPasswordError.innerText = "Password doesn't match";
  } else {
    conformPasswordError.innerText = "";
  }
  if (
    usernameValue.length >= 5 &&
    passwordValue.length >= 5 &&
    passwordValue === conformPasswordValue
  ) {
    console.log("Form submitted Successfully!", {
      username: usernameValue,
      password: passwordValue,
    });
  }
}
