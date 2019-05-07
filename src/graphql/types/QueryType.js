import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql'
import {fromGlobalId} from 'graphql-relay'

import UserType from '../modules/user/UserType'

export default new GraphQLObjectType({
    name: 'Query',
    description: 'The root of all queries',
    fields: () => ({    
        users: {
            type: new GraphQLList(UserType),
            resolve: () => {
                return UserType.find({})
            }
        }
    })
})