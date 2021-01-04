const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/front-jarvis'));

app.get('/*', (req, resp) => {
    resp.send(__dirname + '/dist/front-jarvis/index.html');
});

app.listen(PORT, () => {
    console.log("Servidor iniciado");
})