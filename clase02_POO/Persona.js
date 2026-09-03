export class Persona{
    // maneras de crear un constructor
    // constructor(obj){
    //     this.id= obj.id ?? 0;
    //     this.nombre= obj.nombre ?? "sin nombre"; 
    //     this.edad= obj.edad ?? 18; 
    //     this.sexo= obj.sexo ?? true; 
    //     this.estatura= obj.estatura ?? 1.60; 
    // }
    // maneras de crear un constructor
    // constructor({id, nombre, edad, sexo, estatura}){
    //     this.id= id ?? 0;
    //     this.nombre= nombre ?? "sin nombre"; 
    //     this.edad= edad ?? 18; 
    //     this.sexo= sexo ?? true; 
    //     this.estatura= estatura ?? 1.60; 
    // }
        
    constructor(id, nombre, edad, sexo, estatura){
        this.id= id ?? 0;
        this.nombre= nombre ?? "sin nombre"; 
        this.edad= edad ?? 18; 
        this.sexo= sexo ?? true; 
        this.estatura= estatura ?? 1.60; 
    }

    envejecer(){
        this.edad++;
    }
}

