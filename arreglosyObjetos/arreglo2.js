let estudiantes = [
    {
        nombre: "Anderson",
        edad: 24,
        iden: 12349056,
    },
    {
        nombre: "Mathias",
        edad: 3,
        iden: 2435685
    }
]

let mapa = estudiantes.map(function(estudiante){
    estudiante.nota=1;
    estudiante.edad=estudiante.edad-1; //para descontar la edad de a uno.
    return(estudiante.nombre="CASEMIRO")
});

console.log(mapa);
console.log(estudiantes);