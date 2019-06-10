import { GraphQLObjectType } from 'graphql'

import LoginEmail from '../mutation/user/LoginEmailMutation'
import RegisterEmail from '../mutation/user/RegisterEmailMutation'
import ChangePassword from '../mutation/user/ChangePasswordMutation'
import RegisterPlayer from '../mutation/players/RegisterPlayerMutation'
import RemovePlayer from '../mutation/players/RemovePlayerMutation'

import RegisterTeam from '../mutation/team/RegisterTeamMutation'

export default new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root of ... mutations',
    fields: () => ({
        LoginEmail,
        RegisterEmail,
        ChangePassword,
        RegisterPlayer,
        RemovePlayer,
        RegisterTeam
    })
})