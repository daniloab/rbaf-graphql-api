import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import { globalIdField } from "graphql-relay";

import TeamType from "../team/TeamType";
import Team from "../team/TeamModel";
import { registerTypeLoader, nodeInterface } from "../node/typeRegister";

import { load } from "./UserLoader";
import { connectionDefinitions } from "../../../graphql/connectionDefinitions";

const UserType = new GraphQLObjectType({
  name: "User",
  description: "User data",
  fields: () => ({
    id: globalIdField("User"),
    name: {
      type: GraphQLString,
      resolve: (user) => user.name,
    },
    username: {
      type: GraphQLString,
      resolve: (user) => user.username,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email,
    },
    team: {
      type: TeamType,
      resolve: async (user) => {
        return await Team.findOne({
          _id: user.team,
        });
      },
    },
    kind: {
      type: GraphQLList(GraphQLString),
      description: "Kind that this user belongs: coach or player",
      resolve: (user) => user?.kind || [],
    },
  }),
  interfaces: () => [nodeInterface],
});

registerTypeLoader(UserType, load);

export default UserType;

export const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: UserType,
});
