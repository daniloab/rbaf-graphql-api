import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql'
import { globalIdField } from 'graphql-relay'

const TeamType = new GraphQLObjectType({
    name: 'team',
    description: 'team data',
    fields: () => ({
        id: globalIdField('Team'),
        _id: {
            type: GraphQLString,
            resolve: team => team._id,
        },
        status: {
            type: GraphQLInt,
            resolve: team => team.status,
        },
        name: {
            type: GraphQLString,
            resolve: team => team.name,
        },
        tradeName: {
            type: GraphQLString,
            resolve: team => team.tradeName,
        },
        taxId: {
            type: GraphQLString,
            required: 'tax number is required'
        },
    })
})

export default TeamType