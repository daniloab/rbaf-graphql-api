import { GraphQLObjectType, GraphQLList, GraphQLString } from "graphql";

import UserType from "../modules/user/UserType";
import * as UserLoader from "../modules/user/UserLoader";
import { nodeField, nodesField } from "../modules/node/typeRegister";

// import { version } from "../../../package.json";

export default new GraphQLObjectType({
  name: "Query",
  description: "The root of all queries",
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    version: {
      type: GraphQLString,
      resolve: () => "1.0.0",
    },
    me: {
      type: UserType,
      resolve: (root, args, context) =>
        UserLoader.load(context, context.user?._id),
    },
    // users: {
    //   type: GraphQLList(UserType),
    //   resolve: (obj, args, context) => UserLoader.loadAll(context, args),
    // },
  }),
});
