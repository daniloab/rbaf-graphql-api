import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLID } from 'graphql'

import TeamType from '../team/TeamType'
import Team from '../team/TeamModel'

export default new GraphQLObjectType({
    name: 'User',
    description: 'User data',
    fields: () => ({
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
        team: {
            type: TeamType,            
            resolve: async user => {
                return await Team.findOne({
                    _id: user.team
                })
            },
        }
    })
})