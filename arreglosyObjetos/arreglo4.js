let inmuebles = [
    {
        id: 1,
        nombre: "Anderson",
        direccion: "call 100"
    },
    {
        id: 2,
        nombre: "PROVENZA",
        direccion: "call 35"
    },
    {
        id: 3,
        nombre: "BARRIO TRSITE",
        direccion: "call 80"
    },
]


let buscador = inmuebles.find(function(inmueble){
    return(inmueble.nombre == 'Anderson')
});

console.log(buscador);

let buscador2 = inmuebles.filter(function(inmueble){

    return(inmueble.id == 1)

});

console.log(buscador2);


let buscador3 = inmuebles.some(function(inmueble){

    return(inmueble.id == 1)

});

console.log(buscador);
console.log(buscador2);
console.log(buscador3);