require("dotenv").config();

const express = require("express");

const conexion = require("./config/connectiondb");

const clienteController = require("./controllers/cliente.controller");
const productoController = require("./controllers/producto.controller");
const servicioController = require("./controllers/servicio.controller");

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');

conexion
  .then(() => console.log("Conexion exitosa a MongoDB"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.render('pages/index.ejs');
});
app.get('/clientes', clienteController.consultar);
app.get('/clientes/:id', clienteController.obtenerPorId);
app.post('/clientes', clienteController.crear);
app.put('/clientes/:id', clienteController.actualizar);
app.delete('/clientes/:id', clienteController.eliminar);

app.get('/productos', productoController.consultar);
app.get('/productos/:id', productoController.obtenerPorId);
app.post('/productos', productoController.crear);
app.put('/productos/:id', productoController.actualizar);
app.delete('/productos/:id', productoController.eliminar);

app.get('/servicios', servicioController.consultar);
app.get('/servicios/:id', servicioController.obtenerPorId);
app.post('/servicios', servicioController.crear);
app.put('/servicios/:id', servicioController.actualizar);
app.delete('/servicios/:id', servicioController.eliminar);

app.listen(8080, () => {
  console.log("Servidor corriendo en puerto 8000");
});

