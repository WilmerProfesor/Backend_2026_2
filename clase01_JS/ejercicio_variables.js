//ES6 --> 2015 Aparece let y se depreca var, se recomienda usar let y const.

let numero= 2;
let texto= "Hola";
let estados= true;
let numeroReal= 3.14;

console.log("El valor de la variable numero es: " + numero);
console.log("El valor de la variable texto es: " + texto);
console.log("El valor de la variable estados es: " + estados);
console.log("El valor de la variable numeroReal es: " + numeroReal);

console.log(typeof(numero));
console.log(typeof(texto));
console.log(typeof(estados));
console.log(typeof(numeroReal));

const x= 5;
// x=6; // Esto causará un error porque no se puede reasignar una variable constante
console.log(x);

const arreglo = [1, 2, 3];
arreglo.push(4); // Esto es válido, ya que estamos modificando el contenido del arreglo, no reasignando la variable
console.log(arreglo);
