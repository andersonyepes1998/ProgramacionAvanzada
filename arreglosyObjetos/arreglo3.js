let equipos = [
    {
        nombre:"Medellin",
        titulo: 7,
    },
    {
        nombre:"Junior",
        titulo: 9,
    },
    {
        nombre:"Millonarios",
        titulo: 15,
    }
]

let sumaTitulos = 0;

equipos.forEach(function(equipo){
    sumaTitulos = sumaTitulos+equipo.titulo
});

console.log(sumaTitulos);