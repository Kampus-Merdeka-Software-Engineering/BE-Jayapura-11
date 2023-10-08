const CourseDB = require("../model/model");

exports.getAllData = async (req, res) => {
  try {
    const result = await CourseDB.query();

    return res.status(200).send({ message: "Data berhasil diambil", result });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: "Sedang ada gangguan pada server. Mohon menunggu..",
    });
  }
};
exports.getDataDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CourseDB.query().where({ id });

    if (!result) {
      return res.status(200).send({
        message: "Data tidak ditemukan",
      });
    }
    return res.status(200).send({ message: "Data berhasil diambil", result });

  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: "Sedang ada gangguan pada server. Mohon menunggu..",
    });
  }
};
