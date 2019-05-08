import { GraphQLString, GraphQLNonNull } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import User from '../../modules/user/UserModel'
import { generateToken } from '../../auth'

export default mutationWithClientMutationId({
  name: 'RegisterEmail',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ name, username, email, password }) => {
    let user = await User.findOne({ email: email.toLowerCase() })

    if (user) {
      return {
        token: null,
        error: 'EMAIL_ALREADY_IN_USE',
      }
    }

    user = new User({
      name,
      username,
      email,
      password,
    })
    await user.save()

    return {
      token: generateToken(user),
      error: null,
    }
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
})