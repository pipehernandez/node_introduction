const path = require("path");

const filePath = "/Users/johndoe/Documents/example.txt";

console.log(path.dirname(filePath)); // se obtiene el directorio de la ruta.
console.log(path.basename(filePath)); // se obtiene el nombre del archivo de la ruta.
console.log(path.extname(filePath)); // se obtiene la extension del archivo de la ruta.