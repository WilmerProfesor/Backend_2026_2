
export class User{
    static autoNum=1;
    
    constructor(newUser){
        this.id= User.autoNum++, 
        this.nombre= newUser.nombre ?? "Sin nombre",
        this.apellido= newUser.apellido ?? 'sin apellido', 
        this.edad= newUser.edad ?? 18, 
        this.rol= newUser.rol ?? 'estudiante'
    }
}