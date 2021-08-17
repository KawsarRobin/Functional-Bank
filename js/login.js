document.getElementById("submit-btn").addEventListener("click", function () {
  // get user  email
  const emailField = document.getElementById("email-field");
  const userEmail = emailField.value;

  //get user password
  const passwordField = document.getElementById("password-field");
  const userPassword = passwordField.value;

  if (userEmail == "kawsar" && userPassword == "robin") {
    window.location.href = "banking.html";
  }
});
