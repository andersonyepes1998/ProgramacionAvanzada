const fs = require('fs')

function leer (ruta, callback){
    fs.readFile(ruta, (err, data)=>{
        console.log(data.toString());
    })
}


function escribir(ruta, contenido, callback){
    fs.writeFile(ruta,contenido,function(err){
       if(err){
        console.err('No he podido escribirlo',err);
       } else{
        console.log('Se ha escrito correctamente...')
       }
    })
}


function borrar(ruta,callback){
    fs.unlink(ruta,callback);
}

escribir(__dirname + '/archivo.txt','Soy un archivo nuevo',console.log)
//leer(__dirname + '/archivo.txt',console.log)

//borrar(__dirname + '/archivo.txt',console.log)