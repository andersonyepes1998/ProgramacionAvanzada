let numeros = [5,-9,-8,3,-6,7,1,-5]

let numerosNegativos = function numerosNegat (numero){
    numero.find((acumulador,numero)=> {
        if(numero < 0){
            let total = acumulador += numero;
            return total;
        }
    });
}

console.log(total);