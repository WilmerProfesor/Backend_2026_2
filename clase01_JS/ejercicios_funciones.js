function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

console.log(saludar("Juan")); // Llamada a la función con el argumento "Juan"
console.log(saludar("María")); // Llamada a la función con el argumento "María"

let variable= saludar("Carlos"); // Guardando el resultado de la función en una variable
let variable2= saludar; // Guardando el resultado de la función en una variable
console.log(variable); // Imprime el valor almacenado en la variable
console.log(variable2); // Imprime el valor almacenado en la variable
console.log(variable2("Ana")); // Llamada a la función almacenada en la variable2 con el argumento "Ana"

console.log(typeof(variable));
console.log(typeof(variable2));

// fubnciones flecha (Arrow Functions)
const saludarFlecha = (nombre) => { return "Hola, " + nombre + "!";}

const saludarFlecha2 = () => {return "Hola, " + "Ana" + "!";}

const saludarFlecha3 = () => "Hola, " + "Ana" + "!";

const saludarFlecha4 = (nombre, apellido) => "Hola, " + nombre + " " + apellido + "!";

const saludarFlecha5 = nombre => { return "Hola, " + nombre + "!";}

const saludarFlecha6 = nombre =>  "Hola, " + nombre + "!";


console.log(saludarFlecha("Luis")); // Llamada a la función flecha con el argumento "Luis"
console.log(saludarFlecha2("Luis")); // Llamada a la función flecha con el argumento "Luis"
console.log(saludarFlecha3("Luis")); // Llamada a la función flecha con el argumento "Luis"
console.log(saludarFlecha4("Luis", "Pérez")); // Llamada a la función flecha con los argumentos "Luis" y "Pérez"
console.log(saludarFlecha5("Luis")); // Llamada a la función flecha con el argumento "Luis"
console.log(saludarFlecha6("Luis")); // Llamada a la función flecha con el argumento "Luis"

// FUNCIONES ANÓNIMAS
const saludarAnonimo = function(nombre) {
    return "Hola, " + nombre + "!";
};

console.log(saludarAnonimo("Luis")); // Llamada a la función anónima con el argumento "Luis"