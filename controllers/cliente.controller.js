const Cliente = require('../models/cliente.model');

exports.consultar = async (req, res) => {
  const data = await Cliente.find();
  res.render('pages/clientes.ejs', { clientes: data });

};

exports.obtenerPorId = async (req, res) => {
    try {

        const cliente = await Cliente.findById(req.params.id);

        if (!cliente) {
            return res.status(404).json({
                mensaje: "Cliente no encontrado"
            });
        }

        res.json(cliente);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }
};

exports.crear = async (req, res) => {
  if (!req.body.email && req.body.correo) {
    req.body.email = req.body.correo;
  }

  const data = new Cliente(req.body);
  await data.save();


  res.redirect('/clientes');
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
    const resultado = await Cliente.findByIdAndDelete(req.params.id);

    console.log(resultado);

    res.redirect('/clientes');
};


