/* eslint consistent-return:0 */
const jwt = require('jwt-simple');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const tokenForUser = (user) => {
  const timestamp = Date.now();
  // As a convention, JWTs have a 'sub' property, ie the 'subject' of the token.
  // 'iat' refers to 'issued at time' for determining expiration
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET);
};

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  if (!email || !password) {
    return res.status(422).send({ error: 'Email and password must be defined' });
  }

  if (!firstName || !lastName) {
    return res.status(422).send({ error: 'You must provide a full name' });
  }

  User.findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(422).send({ error: 'Email is in use' });
      }

      // No user found with that email, create and save a new user
      const newUser = new User({
        email,
        password,
        firstName,
        lastName,
      });

      // Respond to the request indicating that new user has been created
      newUser.save()
        .then((user) => {
          // Respond, indicating that user was created successfully
          res.json({ token: tokenForUser(user), userProfile: { firstName, lastName } });
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};
