const input_nombre = document.getElementById("nomb")
const input_apellido = document.getElementById("apell")
const input_telefono = document.getElementById("tel")
const input_email = document.getElementById("corr")
const boton = document.getElementById("registrate")
const input_password = document.getElementById("contra")

let listaUsuarios = []
if (localStorage.getItem("usuarios")) {
    listaUsuarios = JSON.parse(localStorage.getItem("usuarios"))
}

function registro(event) {
    event.preventDefault()

    let nombre = input_nombre.value.trim()
    let apellido = input_apellido.value.trim()
    let telefono = input_telefono.value.trim()
    let email = input_email.value.trim()
    let password = input_password.value.trim()

    if (!nombre || !apellido || !telefono || !email || !password) {
        alert("Por favor completa todos los campos.")
        return
    }

    let usuario = {
        nombre,
        apellido,
        telefono,
        email,
        password
    }

    listaUsuarios.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios))
    alert("Usuario registrado con éxito ✅")
}

boton.addEventListener("click", registro)
