import dotenv from 'dotenv'
import { } from 'graphql'
import { createServer } from 'http'

import app from './graphql/app'
import initDB from './database'

(async () => {
    
dotenv.config()
    // starting db
    try {
        await initDB()
    } catch (error) {
        console.error('Unable to connect to database')
        process.exit(1);
    }

    const server = createServer(app.callback())

    server.listen(process.env.GRAPHQL_PORT, () => console.log(
        `GraphQL Server is now running on http://localhost:${process.env.GRAPHQL_PORT}/graphql`
    ))
})()