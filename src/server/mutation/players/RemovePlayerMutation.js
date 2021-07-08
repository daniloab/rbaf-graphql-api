import { GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import Player from '../../modules/player/PlayerModel'

export default mutationWithClientMutationId({
    name: 'RemovePlayer',
    inputFields: {
        _id: { 
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    mutateAndGetPayload: async ({ id }) => {
        let player = await Player.findOneAndDelete({ _id: id })

        if (!player) {
            return {
                token: null,
                error: 'PLAYER_NOT_FIND',
            }
        }

        return {
            name: player.name,
            lastname: player.lastname,
            error: null,
        }
    },
    outputFields: {
        name: {
            type: GraphQLString,
        },
        lastname: {
            type: GraphQLString,
        },
        error: {
            type: GraphQLString,
            resolve: ({ error }) => error,
        },
    },
})