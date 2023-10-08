const { Model } = require("objection");
const knex = require("../../config/knex");

Model.knex(knex);

class Course extends Model {
  static get tableName() {
    return "courses";
  }
}

module.exports = Course;
