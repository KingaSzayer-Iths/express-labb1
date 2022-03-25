import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config({path:'config/.env'})

export const pool = new pg.Pool({
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
})
