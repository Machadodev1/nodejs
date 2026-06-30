const express = require('express');

const productoController = require('../controllers/producto.controller');

const router = express.Router();

router.get('/productos', productoController.consultar);
router.get('/productos/:id', productoController.obtenerPorId);
router.post('/crearproducto', productoController.crear);
router.put('/productos/editar/:id', productoController.actualizar);
router.delete('/productos/eliminar/:id', productoController.eliminar);






router.get('/crearproducto', (req, res) => {
  res.render('pages/crearproducto.ejs');
});

module.exports = router;

