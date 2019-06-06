import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLEnumType } from 'graphql'
import { connectionDefinitions } from 'graphql-relay'

import TeamType from '../team/TeamType'
import Team from '../team/TeamModel'

const CoachType = new GraphQLObjectType({
    name: 'coach',
    description: 'coach data',
    fields: () => ({
        _id: {
            type: GraphQLID,
            resolve: coach => coach._id,
        },
        staff: {
            type: GraphQLEnumType,
            resolve: coach => coach.staff,
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
        taxId: {
            type: GraphQLString,
            resolve: coach => coach.taxId,
        },
        team: {
            type: TeamType,            
            resolve: async coach => {
                return await Team.findOne({
                    _id: coach.team
                })
            },
        }
    })
})

export default CoachType

export const CoachConnection = connectionDefinitions({
    name: 'Coach',    
    nodeType: CoachType,
})