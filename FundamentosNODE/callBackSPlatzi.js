function asincronismo(nombre, colombia) {
    console.log('soy asincrono')
    setTimeout(function(){
        console.log('Hola, '+ nombre)
        colombia(nombre);
    },3000)
}

function adios(nombre,otrocallback){
    setTimeout(function(){
        console.log('adios',nombre);
        otrocallback();
    },2000)
}

console.log('Iniciando proceso...')
asincronismo('Anderon', function(nombre){
    adios(nombre, function(){
        console.log('Terminado proceso...');
    })
});

// asincronismo('anderson',function(){});
// adios('anderson',function(){});