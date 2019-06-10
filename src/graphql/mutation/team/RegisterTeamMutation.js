import { GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import Team from '../../modules/team/TeamModel'
import TeamType from '../../modules/team/TeamType';

export default mutationWithClientMutationId({
    name: 'RegisterTeam',
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
        tradeName: {
            type: GraphQLString,
        },
        taxId: { 
            type: GraphQLString,
        },
    },
    mutateAndGetPayload: async ({ _id, status, name, tradeName, taxId }) => {
        try {
            let team = await Team.findOne({ taxId });
            
            if (team) {
                team.status = status;
                team.name = name;
                team.tradeName = tradeName;
                team.taxId = taxId;
            } else {
                team = new Team({
                    status: 1,
                    name,
                    tradeName,
                    taxId,
                });
            }         

            const newTeam = await team.save();

            return {
                newTeam,
                error: null,
            }
        } catch (error) {
            return {
                newTeam: null,
                error,
            }
        }
    },
    outputFields: {
        newTeam: {
            type: TeamType,
            resolve: ({newTeam}) => newTeam
        },
        error: {
            type: GraphQLString,
            resolve: ({ error }) => error,
        },
    },
})