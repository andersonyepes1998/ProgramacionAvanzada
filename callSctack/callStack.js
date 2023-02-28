function saludar(){ //declarando la funcion #1
    setTimeout(function(){
        console.log("HOLA COMO ESTAS...");
        despedir()//llamando a mi funcion #2
    },3000)
}

function despedir(){//declarando la funcion #2
    console.log("HASTA LUEGO...");
}

saludar(); //llamando a la funcion #1