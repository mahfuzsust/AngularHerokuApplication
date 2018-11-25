const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const path = require('path');

var package_json = require('./package.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const JWT_Secret = 'your_secret_key';
var testUser = { email: 'test@gmail.com', password: '1234' };

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/' + package_json.name));

app.post('/api/authenticate', (req, res) => {
    if (req.body) {
        var user = req.body;
        console.log(user)

        if (testUser.email === req.body.email && testUser.password === req.body.password) {
            var token = jwt.sign(user, JWT_Secret);
            res.status(200).send({
                signed_user: user,
                token: token
            });
        } else {
            res.status(403).send({
                errorMessage: 'Authorisation required!'
            });
        }
    } else {
        res.status(403).send({
            errorMessage: 'Please provide email and password'
        });
    }

});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/' + package_json.name + '/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);
