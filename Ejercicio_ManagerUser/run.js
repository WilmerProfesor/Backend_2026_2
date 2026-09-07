import { ManagerUser } from "./ManagerUser.js";


const datos= new ManagerUser('./2026-2/Ejercicio_ManagerUser/usuarios.json');
// const info=await datos.getUsers();
datos.createUser({nombre:"algo",apellido:"algoapellido"});
// console.log(info);