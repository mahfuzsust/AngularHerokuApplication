//Install express server
const express = require('express');
const path = require('path');

var package_json = require('./package.json');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/' + package_json.name));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/' + package_json.name + '/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);
