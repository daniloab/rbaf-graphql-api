import { GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import Player from '../../modules/player/PlayerModel'
import PlayerType from '../../modules/player/PlayerType';

export default mutationWithClientMutationId({
    name: 'RegisterPlayer',
    inputFields: {
        _id: {
            type: GraphQLString,
        },
        status: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString,
        },
        lastname: {
            type: GraphQLString,
        },
        position: { 
            type: GraphQLString,
        },
        document: {
            type: GraphQLString,
        },
    },
    mutateAndGetPayload: async ({ _id, status, name, lastname, position, document }) => {
        try {
            let player = await Player.findOne({ document })
            
            if (player) {
                player.status = status
                player.name = name
                player.lastname = lastname
                player.position = position
                player.document = document
            } else {
                player = new Player({
                    status: 1,
                    name,
                    lastname,
                    position,
                    document,
                })
            }

            console.log(player)            

            const newPlayer = await player.save()

            return {
                newPlayer,
                error: null,
            }
        } catch (error) {
            return {
                newPlayer: null,
                error,
            }
        }
    },
    outputFields: {
        newPlayer: {
            type: PlayerType,
            resolve: ({newPlayer}) => newPlayer
        },
        error: {
            type: GraphQLString,
            resolve: ({ error }) => error,
        },
    },
})