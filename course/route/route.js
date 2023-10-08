const controller = require("../controller/controller");

module.exports = function (app) {
  app.get("/courses", controller.getAllData);
  app.get("/courses/:id", controller.getDataDetail);
};
