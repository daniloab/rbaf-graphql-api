import { GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import Player from '../../modules/player/PlayerModel'

export default mutationWithClientMutationId({
    name: 'AddPlayer',
    inputFields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        lastname: {
            type: new GraphQLNonNull(GraphQLString),
        },
        position: {
            type: GraphQLString,
        },
        document: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    mutateAndGetPayload: async ({ name, lastname, position, document }) => {
        let player = await Player.findOne({ document })

        if (player) {
            return {
                token: null,
                error: 'PLAYER_ALREADY_CREATED',
            }
        }

        player = new Player({
            status: 1,
            name,
            lastname,
            position,
            document,
        })
        
        await player.save()

        return {
            status: player.status,
            name: player.name,
            lastname: player.lastname,
            position: player.position,
            document: player.document,
            error: null,
        }
    },
    outputFields: {        
        status: {
            type: GraphQLInt,
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
        error: {
            type: GraphQLString,
            resolve: ({ error }) => error,
        },
    },
})