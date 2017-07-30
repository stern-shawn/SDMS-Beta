/* eslint consistent-return:0 */

exports.validateSignup = (req, res, next) => {
  // Check to ensure that name, email, and password are:
  // -Not blank
  // -Sanitized for html and blanks
  // -Normalized if email
  req.checkBody('firstName', 'You must supply a first name!').notEmpty();
  req.sanitizeBody('firstName');

  req.checkBody('lastName', 'You must supply a last name!').notEmpty();
  req.sanitizeBody('lastName');

  req.checkBody('email', 'That email is invalid!').isEmail().notEmpty();
  req.sanitizeBody('email').normalizeEmail({
    gmail_remove_dots: false,
    gmail_remove_subaddress: false,
    remove_extension: false,
  });

  req.checkBody('password', 'Password cannot be blank!').notEmpty();
  req.assert('password', 'Password must be at least 6 characters').len(6);

  const errors = req.validationErrors();
  // If any errors are returned, status 422 for unprocessable due to failing validation
  if (errors) {
    return res.status(422).json({ validationErrors: errors.map((err) => err.msg) });
  }
  // No errors detected, continue to signup middleware
  next();
};
