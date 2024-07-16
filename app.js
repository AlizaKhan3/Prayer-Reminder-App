const signin_btn =  document.getElementById("signin-btn");
const signup_btn =  document.getElementById("signup-btn");
const container = document.querySelector(".container"); // Use querySelector

signup_btn.addEventListener('click', () => {
    container.classList.add("sign_up_mode");
});

signin_btn.addEventListener('click', () => {
    container.classList.remove("sign_up_mode");
});