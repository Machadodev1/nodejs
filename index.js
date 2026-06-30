require("dotenv").config();

const express = require("express");
const path = require("path");
const methodOverride = require('method-override');

const conexion = require("./config/connectiondb");

const clientesRoutes = require("./router/clientes.routes");
const productosRoutes = require("./router/productos.routes");
const serviciosRoutes = require("./router/servicios.routes");

const app = express();

// Configuración
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(methodOverride('_method'));

// Conexión a MongoDB
conexion
  .then(() => console.log("Conexion exitosa a MongoDB"))
  .catch((err) => console.log(err));

// Ruta principal
app.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

// Rutas
app.use(clientesRoutes);
app.use(productosRoutes);
app.use(serviciosRoutes);

// Servidor
app.listen(1990, () => {
  console.log("Servidor corriendo en puerto 1990");
});