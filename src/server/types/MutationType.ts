import { GraphQLObjectType } from "graphql";

import AuthMutations from "../modules/auth/mutations";

export default new GraphQLObjectType({
  name: "Mutation",
  description: "Root of ... mutations",
  fields: () => ({
    ...AuthMutations,
  }),
});
