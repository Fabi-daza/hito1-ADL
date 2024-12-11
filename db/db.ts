import { Pool } from "pg"
import dotenv from "dotenv"
dotenv.config();

const pool = new Pool({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.DB_NAME,
    password: process.env.PASSWORD_DB,
    port: process.env.PORT_DB ? parseInt(process.env.PORT_DB, 10) : undefined
})

export default pool