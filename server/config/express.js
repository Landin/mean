var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    stylus = require('stylus'),
    passport = require('passport');
    //cors = require('cors'),
    //fs = require('fs');

var app = express();

module.exports = function(app, config){
    function compile(str, path){
        return stylus(str).set('filename', path);
    }

    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'ejs' );
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(session({secret: 'multi vision unicorns',
                     resave: true,
                     saveUninitialized: true}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(stylus.middleware({
            src: config.rootPath + '/public',
            compile: compile
        }
    ));
    app.use(express.static(config.rootPath + '/public'));
    //app.use(cors());
};