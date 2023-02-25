const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");

// sincronización de los modelos con la base de datos
//sequelize.sync();

// creación de la aplicación de Express
const app = express();

// configuración de middleware
app.use(cors());
app.use(bodyParser.json());

// rutas
//app.use('/api/users', userRoutes);

// puerto de escucha
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor API escuchando en el puerto ${port}.`);
});
