const path = require('path');

const fs = require('fs');


let template = fs.readFileSync( path.join( __dirname, 'src', 'template.html' ), 'utf-8' );


let angular = fs.readFileSync( path.join( __dirname, 'src', 'projects', 'angular.html' ), 'utf-8' );
let esb = fs.readFileSync( path.join( __dirname, 'src', 'projects', 'esb.html' ), 'utf-8' );
let intuitive = fs.readFileSync( path.join( __dirname, 'src', 'projects', 'intuitive.html' ), 'utf-8' );
let java = fs.readFileSync( path.join( __dirname, 'src', 'projects', 'java.html' ), 'utf-8' );
let jscriptian = fs.readFileSync( path.join( __dirname, 'src', 'projects', 'jscriptian.html' ), 'utf-8' );
let kons = fs.readFileSync( path.join( __dirname, 'src', 'projects', 'kons.html' ), 'utf-8' );
let modeler = fs.readFileSync( path.join( __dirname, 'src', 'projects', 'modeler.html' ), 'utf-8' );
let sew = fs.readFileSync( path.join( __dirname, 'src', 'projects', 'sew.html' ), 'utf-8' );
let sla = fs.readFileSync( path.join( __dirname, 'src', 'projects', 'sla.html' ), 'utf-8' );
let stewart = fs.readFileSync( path.join( __dirname, 'src', 'projects', 'stewart.html' ), 'utf-8' );
let webservice = fs.readFileSync( path.join( __dirname, 'src', 'projects', 'webservice.html' ), 'utf-8' );

let cv = template;
cv = cv.replace('{{angular.html}}', angular);
cv = cv.replace('{{esb.html}}', esb);
cv = cv.replace('{{intuitive.html}}', intuitive);
cv = cv.replace('{{java.html}}', java);
cv = cv.replace('{{jscriptian.html}}', jscriptian);
cv = cv.replace('{{kons.html}}', kons);
cv = cv.replace('{{modeler.html}}', modeler);
cv = cv.replace('{{sew.html}}', sew);
cv = cv.replace('{{sla.html}}', sla);
cv = cv.replace('{{stewart.html}}', stewart);
cv = cv.replace('{{webservice.html}}', webservice);

fs.writeFileSync( path.join( __dirname, 'resources', 'cv.html'), cv, 'utf-8' );