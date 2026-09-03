const division=(divisor, dividendo)=>{
    return new Promise((resolve, reject) => {
        if(dividendo === 0){
            reject("Error: No se puede dividir entre cero");
        } else {
            resolve(divisor/dividendo);
        }
    });
}

const resultado= division(10, 5)
.then(resultado => {
    console.log("El resultado de la división es: " + resultado);
}).catch(error => {
    console.log(`error: ${error}`);
});
