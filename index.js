const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use( express.static( __dirname + '/resources' ) );
app.use( express.urlencoded( {
    extended: true
} ) );
app.use( express.json() );

app.get('/', (req, res) => {
    res.sendFile( path.join( __dirname, 'resources', 'cv.html' ) );
} );

app.get('/cv', (req, res) => {
    res.sendFile( path.join( __dirname, 'resources', 'cv.html' ) );
} );


app.listen(port, () => console.log( `App started on port ${port}` ) );