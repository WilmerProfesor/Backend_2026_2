const users=[
    {id:1, nombre:"wilmer", apellido:"Patiño", edad: 34},
    {id:2, nombre:"pedro", apellido:"Perdomo", edad: 14},
    {id:3, nombre:"Jose", apellido:"Calderon", edad: 18},
]

let ufind= users.find(usuario => usuario.id === 3);

console.log(ufind);