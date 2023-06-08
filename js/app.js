
    const inputs = document.querySelectorAll('#formulario input');

    for (let index = 0; index < inputs.length; index++) {
        const input = inputs[index];
        const label = input.parentNode.firstElementChild;

        input.addEventListener('focus', () => {
            label.classList.remove("text-gray-400");
            label.classList.add("text-blue-500");
            label.classList.add("-top-2");
            label.classList.add("left-2");
            label.classList.add("text-xs");
            label.classList.add("py-0");
            label.classList.add("px-2");
            label.classList.add("bg-gray-900");
            inputs[inputs.length - 1].value = '';
        });

        input.addEventListener('blur', () => {
            label.classList.remove("text-blue-500");
            label.classList.add("text-gray-400");

            if (input.value.length == 0) {
                label.classList.remove("-top-2");
                label.classList.remove("left-2");
                label.classList.remove("text-xs");
                label.classList.remove("py-0");
                label.classList.remove("px-2");
                label.classList.remove("bg-gray-900");
            }

        });

        if (input.value.length > 0) {
            label.classList.remove("-top-2");
            label.classList.remove("left-2");
            label.classList.remove("text-xs");
            label.classList.remove("py-0");
            label.classList.remove("px-2");
            label.classList.remove("bg-gray-900");
        }
    }

    // var formulario = document.formulario_registro,
    //     elementos = formulario.elements;

    // // Funcion que se ejecuta cuando el evento click es activado

    // var validarInputs = function () {
    //     for (var i = 0; i < elementos.length; i++) {
    //         // Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
    //         if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
    //             // Si es tipo texto, email o password vamos a comprobar que esten completados los input
    //             if (elementos[i].value.length == 0) {
    //                 console.log('El campo ' + elementos[i].name + ' esta incompleto');
    //                 elementos[i].className = elementos[i].className + " error";
    //                 return false;
    //             } else {
    //                 elementos[i].className = elementos[i].className.replace(" error", "");
    //             }
    //         }
    //     }

    //     // Comprobando que las contraseñas coincidan
    //     if (elementos.password.value !== elementos.password2.value) {
    //         elementos.password.value = "";
    //         elementos.password2.value = "";
    //         elementos.password.className = elementos.password.className + " error";
    //         elementos.password2.className = elementos.password2.className + " error";
    //     } else {
    //         elementos.password.className = elementos.password.className.replace(" error", "");
    //         elementos.password2.className = elementos.password2.className.replace(" error", "");
    //     }

    //     return true;
    // };
