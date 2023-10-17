const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailForm = loginForm.elements.email;
  const passwordForm = loginForm.elements.password;

  if (emailForm.value.trim() === "" || passwordForm.value.trim() === "") {
    alert("Please enter the complete information before submitting");
    return;
  } else {
    alert("This form has been successfully submitted!");
  }

  console.log(emailForm.value);
  console.log(passwordForm.value);

  loginForm.reset();
});
