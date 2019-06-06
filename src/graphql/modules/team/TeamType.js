import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql'

const TeamType = new GraphQLObjectType({
    name: 'team',
    description: 'tean data',
    fields: () => ({
        _id: {
            type: GraphQLID,
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
        taxId: {
            type: String,
            required: 'tax number is required'
        },
    })
})

export default TeamType