//una promesa es un callbacks y una promesa es una funcion asincrona que facilita
//su escritura a traves de 2 callbacks() 


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

proceso1('anderson')
.then(function(respuesta){console.log(respuesta)}) //camino de exito
.catch(function(respuesta){console.log(respuesta)}) //camino de rechazo