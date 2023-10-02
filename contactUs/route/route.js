const controller = require('../controller/controller')
const validator = require('../validation/validation')

module.exports = function (app) {
    app.post('/contact-us',validator.contactUsValidation, validator.runValidation, controller.inputMsg)
}