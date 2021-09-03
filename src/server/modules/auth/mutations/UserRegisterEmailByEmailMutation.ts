import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import User from "../../user/UserModel";
import { generateToken } from "../../../auth";

export default mutationWithClientMutationId({
  name: "UserRegisterEmailByEmail",
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ name, email, password }, ctx) => {
    const { team } = ctx;

    let hasUser = await User.findOne({
      email: email.trim().toLowerCase(),
      team: team._id,
    });

    if (hasUser) {
      return {
        token: null,
        error: "User already exists",
      };
    }

    const user = await new User({
      name,
      email,
      password,
      team: team._id,
    }).save();

    return {
      token: generateToken({ user }),
      error: null,
    };
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
});
