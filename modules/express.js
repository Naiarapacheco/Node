const express = require("express");

const app = express();

app.get('/home', (req, res) => {
    res.status(200).contentType('application/html').send('<h1>Hello World</h1>');
});

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'John Wicker',
            email: 'Diana Fox',
        },
        {
            name: 'Jay Junior',
            email: 'Mile Miller',
        }
    ];
    res.status(200).json(users);
})

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta: ${port}`));