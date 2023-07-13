const toggleBtn = document.querySelector('#test-toggle');
const loginContainer = document.querySelector('.container.login');
const toggleSpans = document.querySelectorAll('.login-toggle');
const signUpForm = document.querySelector('#signUp');
const signInForm = document.querySelector('#signIn');

toggleBtn.addEventListener('click', () => {
    loginContainer.classList.toggle('sign-up');
});

for (let toggleSpan of toggleSpans) {
    toggleSpan.addEventListener('click', () => {
        loginContainer.classList.toggle('sign-up');
    });
}

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    const data = Object.fromEntries(formData);
    console.log(data);
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    const data = Object.fromEntries(formData);
    console.log(data);
});