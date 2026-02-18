const input_email = document.getElementById("correo");
const input_password = document.getElementById("pass");
const boton = document.getElementById("ingresar");

let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function ingresar(event) {
    event.preventDefault();

    const email = input_email.value.trim();
    const password = input_password.value.trim();

    if (!email || !password) {
        alert("Ingrese correo y contraseña.");
        return;
    }

    const usuarioEncontrado = listaUsuarios.find(
        (usuario) => usuario.email === email
    );

    if (!usuarioEncontrado) {
        alert("Correo no registrado.");
        return;
    }

    if (usuarioEncontrado.password !== password) {
        alert("Contraseña incorrecta.");
        return;
    }

    localStorage.setItem("login", "true");
    localStorage.setItem("currentUser", JSON.stringify(usuarioEncontrado));

    window.location.href = "home.html";
}

boton.addEventListener("click", ingresar);