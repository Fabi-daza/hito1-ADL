import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER_DB,
  process.env.PASSWORD_DB,
  {
    host: process.env.HOST_DB,  
    dialect: "postgres", 
    port: process.env.PORT_DB,
    logging: false,
  }
);

export default sequelize;
