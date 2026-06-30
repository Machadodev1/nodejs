const express = require('express');

const clienteController = require('../controllers/cliente.controller');

const router = express.Router();

router.get('/clientes', clienteController.consultar);
router.get('/clientes/:id', clienteController.obtenerPorId);
router.post('/crearcliente', clienteController.crear);
router.put('/clientes/editar/:id', clienteController.actualizar);
router.delete('/clientes/eliminar/:id', clienteController.eliminar);
router.get('/eliminarcliente/:id', clienteController.eliminar);
router.get('/crearcliente', (req, res) => {
  res.render('pages/crearcliente.ejs');
});




module.exports = router;


