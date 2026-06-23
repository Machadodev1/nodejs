const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: [true, "nombre obligatorio"] },
  email: { type: String, required: true, unique: true },
  contrasena : {type: String, required: true},
  telefono: { type: String }
});

module.exports = mongoose.model('Usuario', usuarioSchema);