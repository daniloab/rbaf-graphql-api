import { GraphQLObjectType, GraphQLList } from "graphql";

import UserType from "../modules/user/UserType";
import * as UserLoader from "../modules/user/UserLoader";

export default new GraphQLObjectType({
  name: "Query",
  description: "The root of all queries",
  fields: () => ({
    me: {
      type: UserType,
      resolve: (root, args, context) =>
        UserLoader.load(context, context.user?._id),
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: (obj, args, context) => UserLoader.loadAll(context, args),
    },
  }),
});
