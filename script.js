// Función genérica para alternar mensajes
function toggleMensaje(idMensaje, idBoton, textoMostrar, textoBotonMostrar, textoBotonOcultar) {
    const mensaje = document.getElementById(idMensaje);
    const boton = document.getElementById(idBoton);

    if (mensaje.style.display === "none" || mensaje.style.display === "") {
        mensaje.innerText = textoMostrar;
        mensaje.style.display = "block";
        boton.innerText = textoBotonOcultar;
    } else {
        mensaje.style.display = "none";
        boton.innerText = textoBotonMostrar;
    }
}

// Función para alternar entre modo claro y oscuro
function toggleDarkMode() {
    const body = document.body;
    const boton = document.getElementById("btnDarkMode");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        boton.innerText = "Modo claro";
    } else {
        boton.innerText = "Modo oscuro";
    }
}

// Función para alternar entre modo claro y oscuro con interruptor
function toggleDarkMode() {
    const body = document.body;
    const checkbox = document.getElementById("btnDarkMode");

    body.classList.toggle("dark-mode", checkbox.checked);
}


function validarFormulario() {
    const campos = [
        { id: "nombre", mensaje: "Falta rellenar este campo" },
        { id: "email", mensaje: "Falta rellenar este campo" },
        { id: "telefono", mensaje: "Falta rellenar este campo" },
        { id: "mensajeContacto", mensaje: "Falta rellenar este campo" }
    ];

    let formularioValido = true;

    campos.forEach(campo => {
        const input = document.getElementById(campo.id);

        if (input.value.trim() === "") {
            input.classList.add("campo-error");
            input.value = campo.mensaje;
            formularioValido = false;
        } else {
            input.classList.remove("campo-error");
        }

        // Quitar mensaje rojo al escribir
        input.addEventListener("input", function () {
            if (input.classList.contains("campo-error")) {
                input.classList.remove("campo-error");
                input.value = "";
            }
        });
    });

    if (formularioValido) {
        alert("Formulario enviado correctamente");
    }
}
