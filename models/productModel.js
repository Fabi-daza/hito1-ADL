import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Producto = sequelize.define("Producto", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "productos",
  timestamps: false,
});

export default Producto;
