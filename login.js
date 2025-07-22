const input_email = document.getElementById("correo");
const input_password = document.getElementById("pass");
const boton = document.getElementById("ingresar");

let listaUsuarios = [];
if (localStorage.getItem("usuarios")) {
    listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
}

function ingresar(event) {
    event.preventDefault(); // Previene comportamientos no deseados

    const email = input_email.value.trim();
    const password = input_password.value;

    // Validar campos vacíos
    if (!email || !password) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const usuarioEncontrado = listaUsuarios.find(
        (usuario) => usuario.email === email
    );

    if (!usuarioEncontrado) {
        alert("Correo no registrado.");
        return;
    }

    if (usuarioEncontrado.password === password) {
        localStorage.setItem("login", "1");
        window.location.href = "home.html"; // Redirigir al home
    } else {
        alert("Contraseña incorrecta.");
    }
}

boton.addEventListener("click", ingresar);
