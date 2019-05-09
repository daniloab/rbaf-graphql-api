import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql'
import {fromGlobalId} from 'graphql-relay'

import UserType from '../modules/user/UserType'
import User from '../modules/user/UserModel'

export default new GraphQLObjectType({
    name: 'Query',
    description: 'The root of all queries',
    fields: () => ({    
        me: {
            type: UserType,
            resolve: (root, args, context) => {
                //todo me query to check if has user logged
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