import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
} from 'graphql'

import { connectionFromMongoCursor } from '@entria/graphql-mongoose-loader'
import { connectionArgs, connectionFromArray } from 'graphql-relay'

import UserType from '../modules/user/UserType'
import User from '../modules/user/UserModel'
import PlayerType, { PlayerConnection } from '../modules/player/PlayerType'
import Player from '../modules/player/PlayerModel'

export default new GraphQLObjectType({
    name: 'Query',
    description: 'The root of all queries',
    fields: () => ({
        me: {
            type: UserType,
            resolve: (root, args, context) => {
                if (context.user) {

                    const user = User.findById(context.user._id)
                    user.password = null

                    return user
                } else {
                    return null
                }
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve: async () => {
                const users = await User.find({})
                return users.map(m => {
                    m._id,
                        m.name,
                        m.username,
                        m.email,
                        m.password = null
                    return m
                })
            }
        },
        player: {
            type: PlayerType,
            args: { _id: { type: GraphQLString } },
            resolve: async (parent, args) => {
                return await Player.findById(args._id)
            }
        },
        players: {
            type: PlayerConnection.connectionType,
            args: {
                ...connectionArgs,
                status: {
                    type: GraphQLInt,
                },
            },
            resolve: async (context, args) => {
                const where = args.status ? { status: args.status } : {}
                const players = await Player.find(where)                
                return { edges: players.map(player => { node: player }) }
            }
        },
    })
})