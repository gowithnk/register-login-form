// Toggle between the registration and login forms
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const loginToggle = document.getElementById("login-toggle");
const formTitle = document.getElementById("form-title");

loginToggle.addEventListener("click", function (event) {
  event.preventDefault();
  if (registerForm.style.display === "block") {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
    formTitle.textContent = "Login";
  } else {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
    formTitle.textContent = "Register | Email Verification | 2FA";
  }
});

function validateForm() {
  const nameInput = document.getElementById("name");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return false;
  }

  if (usernameInput.value.trim() === "") {
    alert("Please enter a username.");
    usernameInput.focus();
    return false;
  }

  if (emailInput.value.trim() === "") {
    alert("Please enter your email address.");
    emailInput.focus();
    return false;
  } else if (!validateEmail(emailInput.value.trim())) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return false;
  }

  if (passwordInput.value.trim() === "") {
    alert("Please enter a password.");
    passwordInput.focus();
    return false;
  }

  if (confirmPasswordInput.value.trim() === "") {
    alert("Please confirm your password.");
    confirmPasswordInput.focus();
    return false;
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Passwords do not match.");
    confirmPasswordInput.focus();
    return false;
  }

  return true;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
