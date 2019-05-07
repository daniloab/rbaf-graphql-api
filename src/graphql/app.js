require('dotenv').config()
import Koa from 'koa'
import GraphQLHTTP from 'koa-graphql'
import Router from 'koa-router'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'

import { getUser } from './auth';
import { schema } from './schema'

const app = new Koa()
const router = new Router();

const graphqlSettingsPerReq = async req => {
    const { user } = await getUser(req.header.authorization)

    return {
        graphiql: process.env.NODE_ENV !== 'production',
        schema,
        context: {
            user,
            req,
        },
        formatError: error => {
            console.log(error.message);
            console.log(error.locations);
            console.log(error.stack);

            return {
                message: error.message,
                locations: error.locations,
                stack: error.stack,
            };
        },
    }
}

const graphqlServer = GraphQLHTTP(graphqlSettingsPerReq)

router.all('/graphql', graphqlServer)

app.use(bodyParser())
app.use(cors())
app.use(router.routes()).use(router.allowedMethods());

export default app
// app.use(mount('/graphql', GraphQLHTTP({
//     schema: graphQLSchema,
//     rootValue: graphQLResolvers,
//     graphiql: true
// })));

// app.listen(GRAPHQL_PORT, () => console.log(
//     `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
// ))

// app.on('error', err => {
//     log.error('server error', err)
// })