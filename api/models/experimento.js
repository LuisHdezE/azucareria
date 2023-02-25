const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Experimento = sequelize.define("experimentos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  experimento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_corte: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fecha_analisis: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  factor_conv: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  muestreado: {
    type: DataTypes.STRING,
    defaultValue: "no",
    allowNull: false,
  },
  analizado: {
    type: DataTypes.STRING,
    defaultValue: "no",
    allowNull: false,
  },
  procesado: {
    type: DataTypes.STRING,
    defaultValue: "no",
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Experimento;
