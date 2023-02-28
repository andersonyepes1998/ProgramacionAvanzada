//declarando la funcion principal 
//es una funcion como parametro de otra
function principal(numeros,callback){
    setTimeout(function(){
        let suma=0
        numeros.forEach(numero=>suma=suma+numero)
        callback(suma) //llmando a l callback
    },5000)
}
//llamando a la funcion principal
let arreglo=[1,2,3,4,5]
principal(arreglo,function(suma){ //declarando el callback
    let operacion = suma*100;
    console.log(`la sumatoria final es ${operacion}`);
});