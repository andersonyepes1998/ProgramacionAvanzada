// let numeros = [5,-9,-8,3,-6,7,1,-5]

// let dstos = numeros.find(function(numero){
//     let acumulador=0
//     if(numero<0){
//         acumulador++
//     }
//     return acumulador;
// })

// let resultado = dstos(numeros);

// console.log(resultado);

let numeros = [5,-9,-8,3,-6,7,1,-5]

function datosNumeros(numeros){
    let acumulador = 0;
    numeros.forEach((numero)=>{
        if(numero<0){
            acumulador++
        }
    });
    return acumulador;
}

console.log("cantidad de sables defectuosos con energía negativa es de: ", datosNumeros(numeros));

    
