const { Model } = require('objection')
const knex = require("../../config/knex");

Model.knex(knex);

class ContactUs extends Model {
  static get tableName() {
    return "contact_us";
  }
}

module.exports = ContactUs;