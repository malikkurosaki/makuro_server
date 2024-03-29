const express = require('express');
const Api = require('./router_api');
const Web = require('./router_web');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(Web);
app.use('/api', Api);
app.use((req, res, next) => res.status(404).send('404 | Not Found'));
app.use((req, res, next) => res.status(500).send("500 | Server Error"))


app.listen(port, () => console.log('server run on port '+ port));

module.exports = app;