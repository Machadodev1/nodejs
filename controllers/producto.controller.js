const Producto = require('../models/producto.model');

exports.consultar = async (req, res) => {
  const data = await Producto.find();
  res.render('pages/productos.ejs', { productos: data });
};

exports.obtenerPorId = async (req, res) => {
    try {
        console.log("ID recibido:", req.params.id);

        const producto = await Producto.findById(req.params.id);

        console.log("Producto encontrado:", producto);

        if (!producto) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.json(producto);

    } catch (error) {
        console.error("ERROR:", error);
        res.status(500).json({
            mensaje: error.message
        });
    }
};

exports.crear = async (req, res) => {
  const data = new Producto(req.body);
  await data.save();
  res.redirect('/productos');
};

exports.actualizar = async (req, res) => {
  try {
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/productos');
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al actualizar producto");
  }
};


exports.eliminar = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.redirect('/productos');
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al eliminar producto");
  }
};