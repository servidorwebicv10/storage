const apiKey = "04e7ca7f685f0df21e66a9b39137418d";

const inputCiudad = document.getElementById("ciudad");
const botonBuscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

/* Evento botón */
botonBuscar.addEventListener("click", () => {
    const ciudad = inputCiudad.value.trim();

    if (ciudad !== "") {
        obtenerClima(ciudad);
    }
});

/* Evento tecla ENTER */
inputCiudad.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        botonBuscar.click();
    }
});

/* Obtener clima */
async function obtenerClima(ciudad) {
    resultado.innerHTML = "<p>Cargando...</p>";

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`
        );

        if (!response.ok) {
            throw new Error("Ciudad no encontrada");
        }

        const data = await response.json();

        mostrarClima(data);

        // Guardar última ciudad
        localStorage.setItem("ultimaCiudad", data.name);

    } catch (error) {
        mostrarError(error.message);
    }
}

/* Mostrar clima */
function mostrarClima(data) {
    const icono = data.weather[0].icon;

    resultado.innerHTML = `
        <h2>${data.name}</h2>
        <img src="https://openweathermap.org/img/wn/${icono}@2x.png">
        <p>Temperatura: ${data.main.temp}°C</p>
        <p>Clima: ${data.weather[0].description}</p>
        <p>Viento: ${data.wind.speed} m/s</p>
    `;
}

/* Mostrar error */
function mostrarError(mensaje) {
    resultado.innerHTML = `
        <p style="color:red;">${mensaje}</p>
    `;
}

/* Cargar última ciudad al abrir */
window.addEventListener("DOMContentLoaded", () => {
    const ciudadGuardada = localStorage.getItem("ultimaCiudad");

    if (ciudadGuardada) {
        obtenerClima(ciudadGuardada);
    }
});