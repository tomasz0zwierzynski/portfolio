const express = require('express');
const path = require('path');

const fs = require('fs');
const util = require('util');
const logFile = fs.createWriteStream(__dirname + '/debug.log', {flags: 'w'});

const app = express();
const port = 3000;

function log(msg) {
    const now = new Date().toISOString();
    logFile.write(now + ' - ' + util.format(msg) + '\n');
}

app.use( express.static( __dirname + '/resources' ) );
app.use( express.urlencoded( {
    extended: true
} ) );
app.use( express.json() );

app.get('/', (req, res) => {
    log('GET / ' + req.ip);
    res.sendFile( path.join( __dirname, 'resources', 'cv.html' ) );
} );

app.get('/cv', (req, res) => {
    log('GET /cv ' + req.ip);
    res.sendFile( path.join( __dirname, 'resources', 'cv.html' ) );
} );


app.listen(port, () => console.log( `App started on port ${port}` ) );