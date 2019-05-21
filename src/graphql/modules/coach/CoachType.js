import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql'
import { connectionDefinitions } from 'graphql-relay'

const CoachType = new GraphQLObjectType({
    name: 'coach',
    description: 'coach data',
    fields: () => ({
        _id: {
            type: GraphQLID,
            resolve: coach => coach._id,
        },
        squad: {
            type: GraphQLInt,
            resolve: coach => coach.squad,
        },
        name: {
            type: GraphQLString,
            resolve: coach => coach.name,
        },
        lastname: {
            type: GraphQLString,
            resolve: coach => coach.lastname,
        },
        job: {
            type: GraphQLString,
            resolve: coach => coach.job,
        },
        document: {
            type: GraphQLString,
            resolve: coach => coach.document,
        }
    })
})

export default CoachType

export const CoachConnection = connectionDefinitions({
    name: 'Coach',    
    nodeType: CoachType,
})