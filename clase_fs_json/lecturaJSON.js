import fs from 'fs';

const lecturaJSON = async () => {
    const filePath= './2026-2/clase_fs_json/data.json';
    
    try {
        const contenido = await fs.promises.readFile(filePath,'utf8');        
        console.log(contenido);
        const users= JSON.parse(contenido);
        users.push({nombre:"algo", apellido:"otro", edad:18, sexo:true, estatura:1.50});
        console.log(users);
        if(users.some(u=>u.nombre==="wilmer")){
            console.log("El usuario ya existe");            
        }else{
            console.log("Usuario NO encontrado");
                
        }
    } catch (err) {
        console.log("Error: ", err);
    }
};

lecturaJSON();