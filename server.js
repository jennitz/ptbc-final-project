var express = require('express');
var passport = require('passport');
var bodyParser =require('body-parser');
var app = express();
var FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;;

passport.use(new FitbitStrategy({
    clientID:     '22CV9C',
    clientSecret: 'f449a308ebc841a5698328a99d688192',
    callbackURL: "http://localhost:8080/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ fitbitId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

app.use(bodyParser());
app.use(express.static(__dirname + "/public"));

app.listen(8080, function(){
    console.log('You have connected succesfully to port 8080');

});
