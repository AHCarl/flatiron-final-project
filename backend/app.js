const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser')

const router = require('./router/routes')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
router(app)

const server = http.createServer(app)
const port = 5000

console.log('Connecting to Local Database.');
mongoose.connect('mongodb://localhost/fitpad', { useNewUrlParser: true })

server.listen(port)
console.log(`NodeJS Server running on port ${port}.`);