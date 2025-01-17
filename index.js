import express from "express";
import dotenv from "dotenv";
import sequelize from "./db/db.js";
import productsRoutes from "./routes/productsRoutes.js";
import seedProducts from './seeders/productsSeeder.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", productsRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true })
  .then( async () => {
    console.log("Base de datos sincronizada.");
    await seedProducts()
    app.listen(PORT, () => {
      console.log(`Servidor levantado en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("Error al conectar con la base de datos:", err);
    process.exit(1);
  });
