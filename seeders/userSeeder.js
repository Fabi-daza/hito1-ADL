import bcrypt from "bcrypt";
import Usuarios from "../models/userModel.js";

const seedUsers = async () => {
    const hashedPassword = await bcrypt.hash("12345", 12);

    await Usuarios.bulkCreate([
        {
            username: "user1",
            password: hashedPassword
        },
        {
          username: "user2",
            password: hashedPassword
        }
    ])
  console.log("Usuarios insertados correctamente.");
};

const deleteSeedUsers = async () => {
    await Usuarios.destroy({
        where: { username: "admin" },
      });
  console.log("Usuarios eliminados correctamente.");
};

export { seedUsers, deleteSeedUsers}
