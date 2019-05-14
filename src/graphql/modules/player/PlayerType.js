import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql'

export default new GraphQLObjectType({
    name: 'player',
    description: 'player data',
    fields: () => ({
        _id: {
            type: GraphQLID,
            resolve: player => player._id,
        },
        status: {
            type: GraphQLInt,            
            resolve: player => player.status,
        },
        name: {
            type: GraphQLString,
            resolve: player => player.name,
        },
        lastname: {
            type: GraphQLString,
            resolve: player => player.lastname,
        },
        position: {
            type: GraphQLString,
            resolve: player => player.position,
        },
        document: {
            type: GraphQLString,
            resolve: player => player.document,
        }
    })
})