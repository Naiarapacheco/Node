const path = require("path");

// métodos
// apenas o nome do arquivo atual
console.log(path.basename(__filename));

// nome do diretório atual
console.log(path.dirname(__filename));

// extensão do arquivo
console.log(path.extname(__filename));

// criar um Objeto Path
console.log(path.parse(__filename));

// juntar caminhos de arquivos
console.log(path.join(__dirname, "arquivos"))