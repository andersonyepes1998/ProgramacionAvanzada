// function pagos(){
//    let salario = 3500000;
//    let comision = 1500000;
//    let deduciones = 0.05;
//    let resultadoSalario = parseInt(salario + comision);
//    let total = resultadoSalario * deduciones;
//    let resultadoFinal = resultadoSalario - total;

//    return resultadoFinal;
// }

// let totalPagos = pagos();

// console.log("El pago de un vendedor mensual es de: "+totalPagos+ " pesos");

let todoPagos =() => (3500000+1500000)-((3500000 + 1500000)*0.05);

let totalPagos = todoPagos();

console.log("El pago de un vendedor mensual es de: "+totalPagos+ " pesos");