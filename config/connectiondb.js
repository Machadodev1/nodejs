const mongoose = require("mongoose");

var conexion = "";

try {

  const URI = process.env.MONGOURI;

  conexion = mongoose.connect(URI);

} catch (err) {

  console.log(err);

}

module.exports = conexion;