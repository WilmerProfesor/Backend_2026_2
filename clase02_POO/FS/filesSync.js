import fs from 'fs';

// const fs= require('fs');
const filePath= './clase02_POO/FS/ejemplo.txt';

fs.writeFileSync(filePath,"contenido del archivo");
if(fs.existsSync(filePath)){
    let contenido= fs.readFileSync(filePath,'utf8');
    // console.log(contenido);     
    fs.appendFileSync(filePath,"\nactualización del archivo (agregado)");
    contenido= fs.readFileSync(filePath,'utf8');
    console.log(contenido);    
    // fs.unlinkSync(filePath);  // elimina el archivo
}else{
    console.log("No existe el archivo");    
}


//ejemplo con la fecha y hora actual
// import fs from 'fs';
// const formatoLocal = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
// const filePath= `./fileSystem/ejemplo${new Date().getFullYear()}.txt`;
// fs.writeFileSync(filePath,"La fecha actual es: "+formatoLocal);
// if(fs.existsSync(filePath)){
//     let contenido= fs.readFileSync(filePath,'utf8');
//     console.log(contenido);    
//     fs.appendFileSync(filePath,"\n Que bueno");
//     contenido= fs.readFileSync(filePath,'utf8');
//     console.log(contenido);    
//     // fs.unlinkSync(filePath);  // elimina el archivo
// }else{
//     console.log("No existe el archivo");    
// }