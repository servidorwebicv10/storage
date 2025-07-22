/*
//Guardar un dato
localStorage.setItem('nombre', 'Juan')
localStorage.setItem('apellido', 'Vargas');
localStorage.setItem('telefono', '3197658325');
localStorage.setItem('email', 'juan@corr.com');

//Recuperar un dato
let nombre = localStorage.getItem('nombre');
let apellido = localStorage.getItem('apellido');
let telefono = localStorage.getItem('telefono');
let email = localStorage.getItem('email');

const contenedor = document.getElementById('contenedor')
contenedor.textContent = `Los datos son: ${nombre}, ${apellido}, ${telefono}, ${email}`;
*/

/*
// Convertir a JSON para almacenar objetos
let usuario = {nombre: "Juan", apellido: "Vargas", telefono: 6242424, email: "juancho@edu.com", edad: 30};
localStorage.setItem('usuario', JSON.stringify(usuario));

// Convertir de JSON al recuperar
let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
const contenedor = document.getElementById("contenedor")
contenedor.textContent = usuarioRecuperado.nombre
*/
