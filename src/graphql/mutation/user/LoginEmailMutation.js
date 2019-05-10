import { GraphQLString, GraphQLNonNull } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import bcrypt from 'bcrypt'

import User from '../../modules/user/UserModel'
import { generateToken } from '../../auth'

export default mutationWithClientMutationId({
  name: 'LoginEmail',
  description: 'Login Mutation',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ email, password }) => {
    const user = await User.findOne({ email: email.toLowerCase(), password })
    
    if (!user) {
      return {
        token: null,
        error: 'INVALID_EMAIL_PASSWORD',
      }
    }

    // const correctPassword = await bcrypt.compareSync(password, user.password);
    // const correctPassword = user.authenticate(password)

    // console.log(correctPassword)
    // if (!correctPassword) {
    //   return {
    //     token: null,
    //     error: 'INVALID_EMAIL_PASSWORD',
    //   }
    // }

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