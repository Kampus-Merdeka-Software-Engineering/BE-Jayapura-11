const ContactUsDb = require("../model/model");
const { nanoid } = require("nanoid");
const moment = require("moment");

exports.inputMsg = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const id = nanoid(16);
    const created_at = moment().format("MMM Do YYYY, hh:mm:ss ");

    await ContactUsDb.query().insert({
      id,
      name,
      email,
      phone,
      message,
      created_at,
    });

    return res.status(200).send({
        message: 'Data berhasil diinput'
    })

  } catch (error) {
    console.error(error.message);
    return res.status(500).send({
      message: "Sedang ada gangguan pada server. Mohon menunggu..",
    });
  }
};
