import { GraphQLObjectType } from "graphql";

import LoginEmail from "../modules/auth/mutations/LoginEmailMutation";
import RegisterEmail from "../modules/auth/mutations/RegisterEmailMutation";
import ChangePassword from "../modules/auth/mutations/ChangePasswordMutation";

export default new GraphQLObjectType({
  name: "Mutation",
  description: "Root of ... mutations",
  fields: () => ({
    LoginEmail,
    RegisterEmail,
    ChangePassword,
  }),
});
