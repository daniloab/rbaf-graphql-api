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
            type: new GraphQLNonNull(GraphQLString),
        },
        lastname: {
            type: GraphQLString,
        },
        position: { 
            type: GraphQLString,
        },
        taxId: {
            type: new GraphQLNonNull(GraphQLString),
        },
        team: {
          type: new GraphQLNonNull(GraphQLString),
        },
    },
    mutateAndGetPayload: async ({ _id, status, name, lastname, position, taxId, team }) => {
        try {
            let player = await Player.findOne({ taxId })
            
            if (player) {
                player.status = status
                player.name = name
                player.lastname = lastname
                player.position = position
                player.taxId = taxId
            } else {
                player = new Player({
                    status: 1,
                    name,
                    lastname,
                    position,
                    taxId,
                    team
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