const btn_login = document.getElementById('login'),
    btn_register = document.getElementById('register');

const nombre = document.getElementById('nombre'),
    apellido = document.getElementById('apellido'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    password2 = document.getElementById('password2');

btn_login.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = './login.html';
});

emailjs.init("q1H9ReO9vHQRQv5GQ");
emailjs.send("service_m8cswxq", "template_7r156rj", {
    nombre: "Nicholas",
});

btn_register.addEventListener('click', (e) => {
    e.preventDefault();
    // if (validarInputs()) {
    //     axios.get('php/server.php?action=create&nombre=' + nombre.value + '&apellido=' + apellido.value + '&correo=' + email.value + '&pass=' + password.value, {
    //         responseType: 'json'
    //     })
    //         .then(function (res) {
    //             console.log(res);
    //             if (res.status == 200) {
    //                 Swal.fire({
    //                     title: 'Confirmación de Cuenta',
    //                     text: 'Para continuar, hemos enviado un correo de confirmación.',
    //                     icon: 'success',
    //                     timer: 3000,
    //                     showConfirmButton: false
    //                 })
    //             }
    //         })
    //         .catch(function (err) {
    //             console.log(err);
    //         });
    // }

});

const validarInputs = () => {
    const texto = /[A-Za-z]+/,
        correo = /[A-Za-z0-9._-]+@[A-Za-z]+.[A-Za-z]+/,
        pass = /[A-Za-z0-9\W]+/;

    if (!correo.test(email.value)) {
        alert('Por favor, ingresa un correo valido.');
        return false;
    }

    if (password.value !== password2.value) {
        alert('Las contraseñas no coinciden.');
        return false;
    }

    return true;
}

const sendEmail = () => {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "npcastillo73@gmail.com",
        Password: "Nicholas150501",
        To: 'npcastillo73@gmail.com',
        From: "npcastillo73@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}