const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // EL tipo de contenido suele ser "aplication/json"
  res.end("Hello, World!");
});

server.listen(3000, "localhost", () => { //se coloca el nombre del servidor en lugar de "Esto es un mensaje de prueba"
  console.log("Server running at http://localhost:3000/");
});