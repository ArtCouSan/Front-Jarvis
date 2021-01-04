const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/front-jarvis'));

app.get('/*', (req, resp) => {
    resp.send(__dirname + '/dist/front-jarvis/index.html');
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Servidor iniciado");
})