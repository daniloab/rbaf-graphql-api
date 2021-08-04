import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
} from "graphql";
import { globalIdField } from "graphql-relay";

import TeamType from "../team/TeamType";
import Team from "../team/TeamModel";

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
});

export default UserType;
