const resultado = document.getElementById("resultado");

function guardar() {
    const nombre = document.getElementById("nombre").value.trim();

    if (!nombre) {
        alert("Ingresa tu nombre.");
        return;
    }

    const usuario = {
        nombre: nombre,
        fecha: new Date().toLocaleString()
    };

    localStorage.setItem("usuarioDemo", JSON.stringify(usuario));

    mostrar();
}

function mostrar() {
    const data = localStorage.getItem("usuarioDemo");

    if (data) {
        const usuario = JSON.parse(data);
        resultado.textContent = `Guardado: ${usuario.nombre} (${usuario.fecha})`;
    }
}

function eliminar() {
    localStorage.removeItem("usuarioDemo");
    resultado.textContent = "";
}

mostrar();