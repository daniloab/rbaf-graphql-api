import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLEnumType } from 'graphql'
import { globalIdField ,connectionDefinitions } from 'graphql-relay'

import TeamType from '../team/TeamType'
import Team from '../team/TeamModel'

const CoachType = new GraphQLObjectType({
    name: 'coach',
    description: 'coach data',
    fields: () => ({
        id: globalIdField('Coach'),
        _id: {
            type: GraphQLString,
            resolve: coach => coach._id,
        },
        staff: {
            type: GraphQLString,
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