const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Variedad = sequelize.define("variedades", {
  codigo: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Variedad;
