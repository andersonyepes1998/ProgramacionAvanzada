async function asincronismo(nombre) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Hola, '+ nombre)
            resolve(nombre);
        },2000)
    });
}

async function hablar (nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('Buenos dias Mathias...');
            resolve(nombre);
            // reject('Hay un error...')
        });
    })
}

async function adios(nombre){
    return new Promise ((resolve,reject)=>{
        setTimeout(function(){
            console.log('adios, ',nombre);
            resolve();
        },2000)
    })   
}

async function main(){
    let nombre = await asincronismo('Johana...');
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso...')
}

console.log('Empezamos listo')
main();
