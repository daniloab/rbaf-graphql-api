import { } from 'graphql'
import { createServer } from 'http'

import app from './graphql/app'
import initDB from './config/database'

const graphqlPort = 9001

(async () => {
    // starting db
    try {
        await initDB()
    } catch (error) {
        console.error('Unable to connect to database')
        process.exit(1);
    }

    const server = createServer(app.callback())

    server.listen(graphqlPort, () => console.log(
        `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
    ))
})