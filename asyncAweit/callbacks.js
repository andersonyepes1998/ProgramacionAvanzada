//necesito ir a netflix y autenticarlo

function procesoUno(nombreUsuario,procesoDos){//declarando1
    setTimeout(function(){
        if(nombreUsuario=='ADMIN'){
            procesoDos('Exito',null)//llamdado a 2
        }else{
            procesoDos(null,'Falla')//llamado a 2
        }
    },2000)
}


procesoUno('Anderson',function(resuelvo,rechazo){  //llamamos a la funcion callbacks
    if(resuelvo!=null){
        console.log('Bienvenido al netflix');
    }else{
        console.log('Revisa tus datos');
    }
})//llamo a la 1