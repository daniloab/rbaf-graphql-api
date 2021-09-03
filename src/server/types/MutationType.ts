import { GraphQLObjectType } from "graphql";

import LoginEmail from "../modules/auth/mutations/LoginEmailMutation";
import AuthRegisterEmail from "../modules/auth/mutations/AuthRegisterEmailMutation";
import ChangePassword from "../modules/auth/mutations/ChangePasswordMutation";

export default new GraphQLObjectType({
  name: "Mutation",
  description: "Root of ... mutations",
  fields: () => ({
    LoginEmail,
    AuthRegisterEmail,
    ChangePassword,
  }),
});
