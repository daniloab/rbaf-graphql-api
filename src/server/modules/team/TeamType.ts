import { GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField } from "graphql-relay";
import { nodeInterface, registerTypeLoader } from "../node/typeRegister";
import { load } from "./TeamLoader";
import { connectionDefinitions } from "../../../graphql";

const TeamType = new GraphQLObjectType({
  name: "Team",
  description: "team data",
  fields: () => ({
    id: globalIdField("Team"),
    name: {
      type: GraphQLString,
      resolve: (team) => team.name,
    },
  }),
  interfaces: () => [nodeInterface],
});

registerTypeLoader(TeamType, load);

export default TeamType;

export const TeamConnection = connectionDefinitions({
  name: "Team",
  nodeType: TeamType,
});
