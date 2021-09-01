import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";

import UserType, { UserConnection } from "../modules/user/UserType";
import * as UserLoader from "../modules/user/UserLoader";
import * as TeamLoader from "../modules/team/TeamLoader";
import { nodeField, nodesField } from "../modules/node/typeRegister";
import { connectionArgs } from "../../graphql/connectionDefinitions";
import { TeamConnection } from "../modules/team/TeamType";

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
    users: {
      type: GraphQLNonNull(UserConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: async (_, args, context) =>
        await UserLoader.loadAll(context, args),
    },
    teams: {
      type: GraphQLNonNull(TeamConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: async (_, args, context) =>
        await TeamLoader.loadAll(context, args),
    },
  }),
});
