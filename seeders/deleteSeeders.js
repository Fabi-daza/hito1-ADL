import { deleteSeedUsers } from './userSeeder.js'
import { deleteSeedProducts} from './productsSeeder.js';

const deleteSeeders = async () => {
    try {
        await deleteSeedProducts();
        await deleteSeedUsers();
      } catch (error) {
        console.error('Error al borrar los seeders:', error);
      }
}

deleteSeeders()

export default deleteSeeders