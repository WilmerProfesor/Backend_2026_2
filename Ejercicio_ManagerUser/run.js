import { ManagerUser } from "./ManagerUser.js";

//import { User } from "./User.js";

const dato1={nombre:"algo1",apellido:"algoapellido"};
const dato2={nombre:"algo2",apellido:"algoapellido"};
const dato3={nombre:"algo3",apellido:"algoapellido"};
const dato4={nombre:"algo4",apellido:"algoapellido"};
const dato5={nombre:"algo5",apellido:"algoapellido"};

// const user1= new User(dato1);
// const user2= new User(dato2);
// const user3= new User(dato3);
// const user4= new User(dato4);
// const user5= new User(dato5);
// const users=[];
// users.push(user1);
// users.push(user2);
// users.push(user3);
// users.push(user4);
// users.push(user5);
// console.log(users);


const datos= new ManagerUser('./Ejercicio_ManagerUser/usuarios.json');
const f= async()=>{
    await datos.createUser(dato1);
    await datos.createUser(dato2);
    await datos.createUser(dato3);
    await datos.createUser(dato4);
    await datos.createUser(dato5);
}

f();