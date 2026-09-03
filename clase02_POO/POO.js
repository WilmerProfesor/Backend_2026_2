import { Persona } from "./Persona.js";

// const alguien = {
//     nombre: "Juan",
//     edad: 30,
//     saludar: function() {
//         console.log(`Hola, me llamo ${this.nombre}`);
//     }
// };

// { key:valor }
// { "key": "valor" }. JSON.stringify(persona) // convierte el objeto a un string JSON



const x= new Persona(1, "Juan", 30, true, 1.75);
// const y= new Persona(1,null, 30, true, 1.75);
// const z= new Persona({id:1,edad: 30, sexo:true, estatura: 1.75});
console.log(x);
// console.log(y);
// console.log(z);
x.envejecer();
console.log(x);