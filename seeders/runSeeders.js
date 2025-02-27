import { seedUsers } from './userSeeder.js'
//import { seedProducts } from './productsSeeder.js';

const runSeeders = async () => {
    try {
        //await seedProducts();
        await seedUsers();
      } catch (error) {
        console.error('Error al ejecutar los seeders:', error);
      }
}

runSeeders()

export default runSeeders