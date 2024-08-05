// módulo nativo http

const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home Page</h1>');
    }
    if (req.url === '/users'){
        const users = [
            {
                name: 'Litche Mandson',
                email: 'litche@gmail.com',
            },
            {
                name: 'Michel Lohan',
                email: 'michellohan@gmail.com',
            },
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
});
server.listen(port, () => console.log(`rodando na porta ${port}`)); //http://localhost:8080/home