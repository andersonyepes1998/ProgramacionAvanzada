function ontraFuncion(){
    serompe()
}

function serompe() {
    return 3+z;
}

try {
    ontraFuncion();
}catch(err) {
    console.error('algo se ha roto....')
    console.log(err.message);
}

console.log('Estamos al final de la pelicula...')