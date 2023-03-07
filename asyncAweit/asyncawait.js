function proceso1(nombreUsuario){
    let promesa = new Promise(function(resuelve,rechaza){
        setTimeout(function(){
            if(nombreUsuario=='ADMIN'){
                resuelve('Exito')//llamdado a 2
            }else{
                rechaza('Falla')//llamado a 2
            }
        },2000)
    })
    return promesa
}

async function llamadoalapromesa(){
    console.log('Estamos marcando...')
    try{
        let respuesta=await proceso1('ADMIN')
        console.log(respuesta)
    }catch(error){
        console.log(respuesta)
    }
}

llamadoalapromesa()