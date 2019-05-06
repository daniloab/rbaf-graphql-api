import dotenv from 'dotenv'
dotenv.config()

const dbConfig = {
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    database: process.env.MONGO_DB,
}

export default {
    development: dbConfig,
    production: dbConfig
}