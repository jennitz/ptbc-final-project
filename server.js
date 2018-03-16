var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;
var passport = require('passport');
var app = express();

app.use(cookieParser());
app.use(bodyParser());

app.use(session({ secret: 'keyboard cat' }));

app.use(passport.initialize());
app.use(passport.session({
  resave: false,
  saveUninitialized: true
}));

const CLIENT_ID = '22CV9C';
const CLIENT_SECRET = 'f449a308ebc841a5698328a99d688192';

app.use(passport.initialize());

var fitbitStrategy = new FitbitStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  scope: ['activity','heartrate','location','profile'],
  callbackURL: "http://localhost:8080/auth/fitbit/callback"
}, function(accessToken, refreshToken, profile, done) {
  // TODO: save accessToken here for later use

  done(null, {
    accessToken: accessToken,
    refreshToken: refreshToken,
    profile: profile
  });

});

passport.use(fitbitStrategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var fitbitAuthenticate = passport.authenticate('fitbit', {
  successRedirect: '/auth/fitbit/success',
  failureRedirect: '/auth/fitbit/failure'
});

app.get('/auth/fitbit', fitbitAuthenticate);
app.get('/auth/fitbit/callback', fitbitAuthenticate);

app.get('/auth/fitbit/success', function(req, res, next) {
  res.send(req.user);
  console.log();
});

app.listen(8080, function(){
  console.log("Successful connection to 8080.")
});
