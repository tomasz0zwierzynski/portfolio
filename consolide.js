console.log('consolideJS');
const path = require('path');

const fs = require('fs');

console.log('Loading template file src/template.html');
let template = fs.readFileSync( path.join( __dirname, 'src', 'template.html' ), 'utf-8' );

let filenames = fs.readdirSync( path.join( __dirname, 'src', 'projects' ), 'utf-8' );
filenames.forEach(filename => {
    console.log('Reading file src/projects/' + filename);
    let file = fs.readFileSync( path.join( __dirname, 'src', 'projects', filename ), 'utf-8' );
    template = template.replace(`{{${filename}}}`, file);
});

console.log('Saving html file to resources/cv.html');
fs.writeFileSync( path.join( __dirname, 'resources', 'cv.html'), template, 'utf-8' );