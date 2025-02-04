import Producto from "../models/productModel.js";

const seedProducts = async () => {
  await Producto.bulkCreate([
    { titulo: "Teclado", descripcion: "Un teclado muy bonito", stock: 10, precio: 65000 },
    { titulo: "Notebook", descripcion: "Un Notebook muy bonito", stock: 20, precio: 750000 },
    { titulo: "Ipad", descripcion: "Un Ipad no tan bonito", stock: 5, precio: 650000 },
  ]);
  console.log("Productos insertados correctamente.");
};

const deleteSeedProducts = async () => {
  await Producto.destroy({
    where: {
      titulo: ["Teclado", "Notebook", "Ipad"],
    },
  });
  console.log("Productos eliminados correctamente.");
};

export { seedProducts, deleteSeedProducts}