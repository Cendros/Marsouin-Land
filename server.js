const express = require('express');
const path = require('path');

const server = express();
server.use(express.static(__dirname));
server.use(express.json());

const ml_r = require(path.join(__dirname, './sites/Marsouin Land/routers/ml_r'));
const mc_r = require(path.join(__dirname, './sites/Marsouin Crepes/routers/mc_r'));

server.use('/', ml_r);
server.use('/Marsouin-Crepes', mc_r);

function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}

module.exports = keepAlive;