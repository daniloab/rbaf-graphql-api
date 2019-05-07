import { GraphQLString, GraphQLNonNull } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import { User } from '../../models/index'
// import { UserLoader } from '../loader'

export default mutationWithClientMutationId({
  name: 'ChangePassword',
  inputFields: {
    oldPassword: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'user new password',
    },
  },
  mutateAndGetPayload: async ({ oldPassword, password }, { user }) => {
    if (!user) {
      throw new Error('invalid user')
    }

    const correctPassword = user.authenticate(oldPassword)

    if (!correctPassword) {
      return {
        error: 'INVALID_PASSWORD',
      }
    }

    user.password = password
    await user.save()

    return {
      error: null,
    }
  },
  outputFields: {
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
    // me: {
    //   type: User,
    //   resolve: (obj, args, context) => UserLoader.load(context, context.user.id),
    // },
  },
})