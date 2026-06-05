const Cliente = require('../models/cliente.model');

exports.consultar = async (req, res) => {
  const data = await Cliente.find();
  res.render('pages/clientes.ejs', { clientes: data });

};

exports.obtenerPorId = async (req, res) => {
  const data = await Cliente.findById(req.params.id);
  res.json(data);
};

exports.crear = async (req, res) => {
  const data = new Cliente(req.body);
  await data.save();
  res.json(data);
};

exports.actualizar = async (req, res) => {
  const data = await Cliente.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

exports.eliminar = async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Cliente eliminado" });
};