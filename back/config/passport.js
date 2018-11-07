const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../modules/users');
const config = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.getUserById(jwt_payload.data._id, (err, user) => {
      if(err) {
        return done(err, false);
      }
      if(user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));

// google stritge
  passport.use('google', new GoogleStrategy({
    callbackURL:'/auth/google/redirect',
    clientID:config.google.clientID,
    clientSecret:config.google.clientSecret,
}, () =>{
    console.log('profile');
}
)
);

}