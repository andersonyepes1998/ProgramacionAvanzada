function distancia(x1,y1,x2,y2){
    //let  restax = x2-x1;
    //let restay = y1-y2;
    //let potenciax = Math.pow(restax,2); se resuelve la potencia
    //let potenciay = Math.pow(restay,2); se resuelve la potencia
    //let sumatoria = potenciax + potenciay;   sqrt se resuelve la raiz cuadrada.
    let raizCuadrada = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y1-y2,2));
    return raizCuadrada;
}

let bolsita = distancia(1,1,2,3);

console.log(bolsita + ' UA');