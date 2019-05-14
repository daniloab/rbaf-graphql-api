import { GraphQLObjectType } from 'graphql'

import LoginEmail from '../mutation/user/LoginEmailMutation'
import RegisterEmail from '../mutation/user/RegisterEmailMutation'
import ChangePassword from '../mutation/user/ChangePasswordMutation'
import NewPlayer from '../mutation/players/NewPlayerMutation'


export default new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root of ... mutations',
    fields: () => ({
        LoginEmail,
        RegisterEmail,
        ChangePassword,
        NewPlayer
    })
})