import { DataTypes } from "sequelize";
import bcrypt from 'bcrypt';
import sequelize from "../db/db.js";

const Usuarios = sequelize.define("Usuarios", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: "usuarios",
    timestamps: false,
    hooks: {
        beforeCreate: async(user) => {
            user.password = bcrypt.hashSync(user.password, 12)
        },
    }
  });
  
  export default Usuarios;
  