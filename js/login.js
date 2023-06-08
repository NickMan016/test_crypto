const btn_login = document.getElementById('login'),
btn_register = document.getElementById('register');

btn_register.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = './register.html';
});