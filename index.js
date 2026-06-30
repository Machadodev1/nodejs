require("dotenv").config();

const express = require("express");

const conexion = require("./config/connectiondb");

const clientesRoutes = require('./router/clientes.routes');
const productosRoutes = require('./router/productos.routes');
const serviciosRoutes = require('./router/servicios.routes');


const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const enrutamiento = require("./router/clientes.routes.js");
const enrutamiento2 = require("./router/productos.routes.js");
const enrutamiento3 = require("./router/servicios.routes.js");
app.use('/api/cli/',enrutamiento);
app.use('/api/pro/',enrutamiento2);
app.use('/api/ser/',enrutamiento3);

conexion
  .then(() => console.log("Conexion exitosa a MongoDB"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.render('pages/index.ejs');
});
app.use(clientesRoutes);
app.use(productosRoutes);
app.use(serviciosRoutes);


app.listen(1990, () => {
  console.log("Servidor corriendo en puerto 1990");
});

