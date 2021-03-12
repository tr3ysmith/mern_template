// Setup Logger
var logger = require('./config/logger')(module);

// Setup global Variables
const express               = require('express');
const bodyParser            = require('body-parser');
const cookieParser          = require('cookie-parser');
const path                  = require("path");

//Local Variables
const app                   = express();
const port                  = process.env.PORT || 3001;

// Setup Express
app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({ extended: false }));

// If in production, then we will have build files to host
if(process.env.NODE_ENV === 'production') {
    app.use(express.static("build")); // change this if your dir structure is different
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "build", "index.html"));
    });
}

// Host the static files
app.use('/static', express.static(path.join(__dirname, 'static')));

const server = app.listen(port, () => { 
    logger.info("Server up and running on port " + port);
});