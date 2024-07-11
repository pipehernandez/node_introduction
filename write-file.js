const fs = require("fs");

fs.writeFile(/*nombre del archivo:*/"example.txt",/*Texto a escribir:*/ "Hello World!", (err) => { // puedo crear un archivo nuevo si el nombre que coloque del archivo no existe.
    if (err){
        console.error(err);
        return;
    }

    console.log("File written succesfully"); // si no hay error manda este mensaje.
});