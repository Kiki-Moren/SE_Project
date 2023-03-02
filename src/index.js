const express = require('express');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('hello World!');
});

app.listen(port, () => {
    console.log('Server running');
})