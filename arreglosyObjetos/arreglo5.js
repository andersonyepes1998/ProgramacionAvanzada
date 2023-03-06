let numeros = [10,20,30,40,50,60,70,80,90,100]

//filtrar los numero mayores o iguales a 50;

let mayores = numeros.filter(function(numero){
    return(numero >= 50)
});


let mayores2 = numeros.filter(numero => numero >=50)



//mapear el filtro y restarle a cada elementodel del arreglo 10


let numerosMenos10 = mayores.map(function(numero){
    return numero=numero-10;
})

let numerosMenos102 = mayores.map(numero => numero=numero-10)


//encontrar si esta el numero 10

let numero10 = numerosMenos10.some(function(numero){
    return(numero == 10)
})

console.log(numero10);