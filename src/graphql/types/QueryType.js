import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql'
import { fromGlobalId } from 'graphql-relay'

import UserType from '../modules/user/UserType'
import User from '../modules/user/UserModel'

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
            resolve: () => {
                return User.find({})
            }
        }
    })
})