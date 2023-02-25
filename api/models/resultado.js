const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Variedad = require("./variedad");

const Resultado = sequelize.define("resultados", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  parcela: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  temperatura: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  peso: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  codigo_variedad: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Variedad,
      key: "codigo",
    },
  },
  brix_obs: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  lectura: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  brix_cor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  polaroide: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sacarosa: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  pol: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  pureza: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Resultado.belongsTo(Variedad, {
  foreignKey: "codigo_variedad",
  as: "variedad",
});

module.exports = Resultado;
