document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("Form submitted");
      console.log("Username:", usernameInput.value);
      console.log("Email:", emailInput.value);
      console.log("Age:", ageInput.value);
    });
  
    form.addEventListener("reset", (event) => {
      console.log("Form reset");
    });
  
    usernameInput.addEventListener("focus", () => {
      console.log("Username input focused");
    });
  
    usernameInput.addEventListener("blur", () => {
      console.log("Username input blurred");
    });
  
    emailInput.addEventListener("change", () => {
      console.log("Email input changed");
    });
  
    ageInput.addEventListener("input", () => {
      console.log("Age input value:", ageInput.value);
    });
  });
  