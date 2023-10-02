const { check, validationResult } = require("express-validator");


exports.contactUsValidation = [
  check("name").notEmpty().withMessage("Name field cannot be empty"),
  check("email").notEmpty().withMessage("Email field cannot be empty"),
  check("email").isEmail().withMessage("Email Address is not valid"),
  check("phone").notEmpty().withMessage("Phone number field cannot be empty"),
  check("message").notEmpty().withMessage("Message field cannot be empty"),
];

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req).errors;

  const listErrors = [];
  if (errors.length !== 0) {
    errors.map((error) => {
      listErrors.push({
        error: true,
        key: error.param,
        message: error.msg,
      });
    });
  }

  if (listErrors.length !== 0) {
    return res.status(400).send(listErrors);
  }
  next();
};