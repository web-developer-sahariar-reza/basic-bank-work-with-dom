document.getElementById("btn-log-in").addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const email = emailField.value;

  const passwordField = document.getElementById("password-field");
  const password = passwordField.value;

  if (email === "abc@bank.com" && password === "abc") {
    window.location.href = "bank.html";
  } else {
    alert("Wrong Email or Password");
  }

  emailField.value = "";
  passwordField.value = "";
});
