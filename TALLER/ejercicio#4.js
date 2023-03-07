let numeros = [5,-9,-8,3,-6,7,1,-5]

let dstos=numeros.find (function(numero){
    let acumulador=0
    if(numero < 0){
        let total = acumulador + numero;
        return total;
    }
})

console.log(dstos);

    
