function asincronismo(nombre) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Hola, '+ nombre)
            resolve(nombre);
        },2000)
    });
}

function hablar (nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('Buenos dias Mathias...');
            //resolve(nombre);
            reject('Hay un error...')
        },1500);
    })
}

function adios(nombre){
    return new Promise ((resolve,reject)=>{
        setTimeout(function(){
            console.log('adios, ',nombre);
            resolve();
        },2000)
    })
    
}

//---
console.log('Iniciando el proceso...')
asincronismo('Mathias')
    // .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log('Terminado el proceso...')
    })
    .catch(error =>{
        console.error('Hay un error...')
        console.error(error);
    })