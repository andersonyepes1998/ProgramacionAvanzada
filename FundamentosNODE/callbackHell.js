function asincronismo(nombre, colombia) {
    console.log('soy asincrono')
    setTimeout(function(){
        console.log('Hola, '+ nombre)
        colombia(nombre);
    },3000)
}

function hablar (callbackHablar){
    setTimeout(function(){
        console.log('Buenos dias Mathias...');
        callbackHablar();
    },1500);
}

function adios(nombre,otrocallback){
    setTimeout(function(){
        console.log('adios, ',nombre);
        otrocallback();
    },2000)
}

function conversetion(nombre, veces, callback){
    if (veces >0){
        hablar(function(){
            conversetion(nombre, --veces, callback);
        });
    }else{
        adios(nombre,callback);
    }
}

//---  

console.log('Iniciando proceso...')
asincronismo('Anderson',function(nombre){
    conversetion(nombre,3,function(){
        console.log('Proceso terminado...')
    });
});



// asincronismo('Anderson', function(nombre){
//     adios(nombre,function(){
//         console.log('Terminamos...')
//     });
// });
//     hablar(function(){
//         hablar(function(){
//             hablar(function(){
//                 adios(nombre, function(){
//                     console.log('Terminado proceso...');
//                 });
//             });
//         });
//     });
