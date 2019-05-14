import { GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import Player from '../../modules/player/PlayerModel'

export default mutationWithClientMutationId({
    name: 'UpdatePlayer',
    inputFields: {
        _id: {
            type: new GraphQLNonNull(GraphQLString),
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
        let player = await Player.findById({ _id: _id })

        if (!player) {
            return {
                token: null,
                error: 'PLAYER_NOT_FIND',
            }
        }

        player.status = status
        player.name = name
        player.lastname = lastname
        player.position = position
        player.document = document

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