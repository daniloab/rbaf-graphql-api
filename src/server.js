require('dotenv').config()
import Koa from 'koa'
import GraphQLHTTP from 'koa-graphql'
import Router from 'koa-router'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import mount from 'koa-mount'

import graphQLSchema from './graphql/schema'
import graphQLResolvers from './graphql/resolvers'

const GRAPHQL_PORT = 9001
const app = new Koa()
const router = new Router();

import initDB from './config/database'
initDB()

app.use(cors())
app.use(bodyParser())

app.use(mount('/graphql', GraphQLHTTP({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true
})));

app.listen(GRAPHQL_PORT, () => console.log(
    `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
))

app.on('error', err => {
    log.error('server error', err)
})