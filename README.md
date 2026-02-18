# JavaScript Practice Projects Collection

This repository contains three practical JavaScript projects focused on front-end development concepts such as API consumption, local storage, and authentication logic.

The goal of this project is to strengthen core JavaScript skills while applying real-world functionality.

---

## Project Structure
```
storage/
│
├── weather-app/
  | clima.js
  | clima.css
  | clima.html
|
├── localstorage/
  | localstorage.js
  | localstorage.css
  | localstorage.html
|
├── authentication-system/
  | home.html
  | home.css
  | login.js
  | login.css
  | login.html
  | registro.js
  | registro.css
  | registro.html
|
└── README.md
```

Each folder represents a standalone practical module.

---

# 1. Weather App

A web application that allows users to check the current weather of any city in the world using the OpenWeather API.

### Features

- Search weather by city name  
- Display current temperature in Celsius  
- Show weather description  
- Display wind speed  
- Dynamic weather icon  
- Automatically saves last searched city  
- Press **Enter** to trigger search  
- Error handling for invalid cities  

### Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- Fetch API  
- LocalStorage  
- OpenWeather API  

### API Endpoint Used

https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es


### Concepts Applied

- REST API consumption  
- Async/Await  
- DOM manipulation  
- Event handling  
- Local storage persistence  
- Error handling with try/catch  

---

# 2. LocalStorage Practice (Name Saver)

A simple JavaScript project designed to understand how browser storage works.

### Features

- Save a user's name in the browser
- Retrieve stored data automatically
- Update stored information
- Persist data even after page refresh

### Technologies Used

- HTML5  
- CSS3  
- JavaScript  
- LocalStorage API  

### Concepts Applied

- `localStorage.setItem()`
- `localStorage.getItem()`
- `localStorage.removeItem()`
- Data persistence in the browser
- Conditional rendering based on stored data

This module focuses purely on understanding how client-side storage works without backend interaction.

---

# 3. Authentication System (Login & Register)

A front-end authentication simulation built to practice form validation and user management logic.

¡This is a client-side authentication simulation (no real backend or database)!.

### Features

- User registration form
- Login validation
- Credential storage in localStorage
- Error handling for invalid credentials
- Basic session simulation

### Technologies Used

- HTML5  
- CSS3  
- JavaScript  
- LocalStorage  

### Concepts Applied

- Form validation
- Input sanitization
- Conditional logic
- Authentication flow simulation
- Basic session management
- Secure handling concepts (frontend level)

---

# Learning Objectives

This repository demonstrates practical understanding of:

- JavaScript fundamentals
- Asynchronous programming
- Working with external APIs
- Client-side data persistence
- Authentication logic fundamentals
- Clean project structure
- Version control using Git

---

# Possible Future Improvements

- Implement real backend authentication (Node.js + Express)
- Use a database instead of localStorage
- Improve responsive design
- Add dark mode to all modules
- Add unit testing
- Deploy projects online

---

# Note

This collection of projects demonstrates progressive learning:

1. Understanding browser storage  
2. Building authentication logic  
3. Consuming external APIs  

It reflects practical front-end development skills and foundational knowledge for full-stack development.

---

# Author

Iván David Caro Vargas  
Aspiring Full Stack Developer  


