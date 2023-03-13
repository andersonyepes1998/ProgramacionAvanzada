// console.log('Hola mundo');

// let i = 0;

//setInterval Sirve casi igual que un ciclo for, para ir suma en orden.
//El método setInterval() , ofrecido en las interfaces Window y Worker , 
//llama a una función o ejecuta un fragmento de código de forma reiterada, 
//con un retardo de tiempo fijo entre cada llamada.

// setInterval(function(){
//     console.log(i);
//     i++
// },1000)


let nombre = process.env.NOMBRE || 'Sin nombre';

console.log('Hola '+nombre);

