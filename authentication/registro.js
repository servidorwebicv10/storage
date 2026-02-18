const input_nombre = document.getElementById("nomb");
const input_apellido = document.getElementById("apell");
const input_telefono = document.getElementById("tel");
const input_email = document.getElementById("corr");
const input_password = document.getElementById("contra");
const boton = document.getElementById("registrate");

let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function registro(event) {
    event.preventDefault();

    const nombre = input_nombre.value.trim();
    const apellido = input_apellido.value.trim();
    const telefono = input_telefono.value.trim();
    const email = input_email.value.trim();
    const password = input_password.value.trim();

    if (!nombre || !apellido || !telefono || !email || !password) {
        alert("Por favor, complete los apartados.");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe ser de al menos 6 caracteres de longitud.");
        return;
    }

    const usuarioExistente = listaUsuarios.find(
        (usuario) => usuario.email === email
    );

    if (usuarioExistente) {
        alert("Correo ya registrado.");
        return;
    }

    const nuevoUsuario = {
        nombre,
        apellido,
        telefono,
        email,
        password
    };

    listaUsuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

    alert("Registro exitoso");

    window.location.href = "login.html";
}

boton.addEventListener("click", registro);
