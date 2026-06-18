require("dotenv").config();

const express = require("express");

const conexion = require("./config/connectiondb");

const clienteController = require("./controllers/cliente.controller");
const productoController = require("./controllers/producto.controller");
const servicioController = require("./controllers/servicio.controller");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


conexion
  .then(() => console.log("Conexion exitosa a MongoDB"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.render('pages/index.ejs');
});
app.get('/clientes', clienteController.consultar);
app.get('/clientes/:id', clienteController.obtenerPorId);
app.post('/crearcliente', clienteController.crear);
app.put('/clientes/:id', clienteController.actualizar);
app.delete('/clientes/:id', clienteController.eliminar);
app.get('/crearcliente', (req, res) => {
    res.render('pages/crearcliente.ejs');
});
app.get('/eliminarcliente/:id', clienteController.eliminar);

app.get('/productos', productoController.consultar);
app.get('/productos/:id', productoController.obtenerPorId);
app.post('/crearproducto', productoController.crear);
app.put('/productos/:id', productoController.actualizar);
app.delete('/productos/:id', productoController.eliminar);
app.get('/crearproducto', (req, res) => {
  res.render('pages/crearproducto.ejs');
});

app.get('/servicios', servicioController.consultar);
app.get('/servicios/:id', servicioController.obtenerPorId);
app.post('/crearservicio', servicioController.crear);
app.put('/servicios/:id', servicioController.actualizar);
app.delete('/servicios/:id', servicioController.eliminar);
app.get('/crearservicio', (req, res) => {
  res.render('pages/crearservicio.ejs');
});

app.listen(9000, () => {
  console.log("Servidor corriendo en puerto 9000");
});

