const express = require('express');

const servicioController = require('../controllers/servicio.controller');

const router = express.Router();

router.get('/servicios', servicioController.consultar);
router.get('/servicios/:id', servicioController.obtenerPorId);
router.post('/crearservicio', servicioController.crear);
router.put('/servicios/editar/:id', servicioController.actualizar);
router.delete('/servicios/eliminar/:id', servicioController.eliminar);






router.get('/crearservicio', (req, res) => {
  res.render('pages/crearservicio.ejs');
});

module.exports = router;

