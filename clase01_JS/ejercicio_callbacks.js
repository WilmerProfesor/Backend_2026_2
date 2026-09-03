const arreglo= [1, 2, 3, 4, 5];

arreglo.map(elemento => console.log(elemento*2));

const funcionCallback= (elemento) =>{ 
    if (elemento % 2 === 0) {
        return `El número ${elemento} es par`;
    } else {
        return `El número ${elemento} es impar`;
    }
};

arreglo.map(elemento=>console.log(funcionCallback(elemento)));

arreglo.map(elemento => console.log(Math.pow(elemento, 2)));

const suma=(a,b)=>a+b;
const resta=(a,b)=>a-b;
const multiplicacion=(a,b)=>a*b;
const division=(a,b)=>a/b;

const calculadora=(a,b,operacion)=>{
    return operacion(a,b);
}

console.log(calculadora(5,3,suma));
console.log(calculadora(5,3,resta));
