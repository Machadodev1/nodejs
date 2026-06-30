const Servicio = require('../models/servicio.model');


exports.consultar = async (req, res) => {
  const data = await Servicio.find();
  res.render('pages/services.ejs', { servicios: data });
};

exports.obtenerPorId = async (req, res) => {
    try {

        const servicio = await Servicio.findById(req.params.id);

        if (!servicio) {
            return res.status(404).json({
                mensaje: "Servicio no encontrado"
            });
        }

        res.json(servicio);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }
};

exports.crear = async (req, res) => {
  const data = new Servicio(req.body);
  await data.save();

  res.redirect('/servicios');
};

exports.actualizar = async (req, res) => {
  const data = await Servicio.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

exports.eliminar = async (req, res) => {
  try {
    await Servicio.findByIdAndDelete(req.params.id);
    res.redirect('/servicios');
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al eliminar servicio");
  }
};