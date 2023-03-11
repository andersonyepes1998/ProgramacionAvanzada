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


let numeros = [0,-6,3,6,7,9,40,50,]

let retorno = numeros.find(function(numero){
    if(numero<0){
        return(Math.abs(numero-0))
    }
})

console.log(retorno);