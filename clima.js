async function fetchclima() {
    let respuesta = await fetch('https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=bfb499d65458b86bf7dc59203d6c621b');
    let data = await respuesta.json();
    console.log(data);
}

fetchclima();