import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql'
import { globalIdField, connectionDefinitions } from 'graphql-relay'

import TeamType from '../team/TeamType'
import Team from '../team/TeamModel'

const PlayerType = new GraphQLObjectType({
    name: 'player',
    description: 'player data',
    fields: () => ({
        id: globalIdField('Player'),
        _id: {
            type: GraphQLString,
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
        taxId: {
            type: GraphQLString,
            resolve: player => player.taxId,
        },
        team: {
            type: TeamType,            
            resolve: async player => {
                return await Team.findOne({
                    _id: player.team
                })
            },
        }
    })
})

export default PlayerType

export const PlayerConnection = connectionDefinitions({
    name: 'Player',    
    nodeType: PlayerType,
})