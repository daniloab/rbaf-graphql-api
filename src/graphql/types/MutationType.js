import { GraphQLObjectType } from 'graphql'

import LoginEmail from '../mutation/user/LoginEmailMutation'
import RegisterEmail from '../mutation/user/RegisterEmailMutation'
import ChangePassword from '../mutation/user/ChangePasswordMutation'


export default new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root of user mutations',
    fields: () => ({
        LoginEmail,
        RegisterEmail,
        ChangePassword
    })
})