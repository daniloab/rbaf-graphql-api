import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql'
import { globalIdField } from 'graphql-relay'

export default new GraphQLObjectType({
    name: 'User',
    description: 'User data',
    fields: () => ({
        id: globalIdField('User'),
        _id: {
            type: GraphQLString,
            resolve: user => user._id,
        },
        name: {
            type: GraphQLString,
            resolve: user => user.name,
        },
        username: {
            type: GraphQLString,
            resolve: user => user.username,
        },
        email: {
            type: GraphQLString,
            resolve: user => user.email,
        },
        password: {
            type: GraphQLString,
            resolve: user => user.password,
        },
    })
})