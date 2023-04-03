// var tabla = [
//     {
//         a:1,
//         b:'z'
//     },
//     {
//         a:3,
//         b:'otra'
//     }
// ]
// console.table(tabla);

function function1(){
    console.group('Funcion1');
    console.log('Esto es de la funcion1...')
    console.log('Esto es de la funcion2...')
    function2()
    console.log('hemos vuelto al segundo codigo...')
    console.groupEnd('Funcion1');

}
function function2(){
    console.group('Funcion2');
    console.log('Ahora estamos en la funcion #2')
    console.groupEnd('Funcion2');
}
console.log('Empezamos...')
function1();


console.count('Colombia');
console.count('Colombia');
console.count('Colombia');
console.count('Colombia');
console.countReset('Colombia');
console.count('Colombia');
