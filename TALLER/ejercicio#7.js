// let numeros = [0,6,7,9,40,50,];

// function numeroMasCercano(numeros){
//     numeros.forEach((numero)=>{
//         let x = Math.abs(numero-0);
//         let y = Math.abs(numero-0);

//         if(x<y){
//             return numero;
//         }

//         if(y<x){
//             return numero;
//         }
//     })
// }

// console.log('El numero mas cercano a cero es:'+numeroMasCercano(numeros));


let numeros = [0,1,-5,3,6,7,9,40,50,]

function obtenerNumero (numeros){
    let numeroAcumulador = 0;

    for (let i=0; i<numeros.length; i++){

        if(numeroAcumulador === 0){
            numeroAcumulador = numeros[i];

        }else if(numeros[i]>0 && numeros[i] <= Math.abs(numeroAcumulador)){
            numeroAcumulador = numeros[i];

        }else if(numeros[i]<0 && - numeros[i] < Math.abs(numeroAcumulador)){
            numeroAcumulador = numeros[i];
        }
    }
}

console.log(obtenerNumero(numeros));

let mapas = numeros.forEach(function(numero){

    if(numero<0){
        numero = Math.abs(numero)
        console.log(numero)
    }
})
