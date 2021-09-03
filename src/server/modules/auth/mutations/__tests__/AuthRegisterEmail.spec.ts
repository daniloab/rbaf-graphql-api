import { graphql } from "graphql";
import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
  sanitizeTestObject,
} from "../../../../../../test";

import { createUser } from "../../../user/fixture/createUser";
import { getContext } from "../../../../getContext";

import { schema } from "../../../../schema";
import { createTeam } from "../../../team/fixture/createTeam";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should create a new user", async () => {
  const team = await createTeam({
    name: "Team A",
  });

  const query = `
    mutation M ($name: String!, $email: String!, $password: String!, ) {
      UserRegisterEmailByEmail (input: { name: $name, email: $email, password: $password }) {
        error
        token
      }
    }
  `;
  const variables = {
    name: "Danilo",
    email: "danilo@test.com",
    password: "awesomepw",
  };

  const rootValue = {};

  const context = await getContext({ team });

  const result = await graphql(schema, query, rootValue, context, variables);

  expect(result.errors).toBeUndefined();
  expect(result.data.UserRegisterEmailByEmail.error).toBeNull();

  expect(result.data.UserRegisterEmailByEmail.token).toBeDefined();

  expect(sanitizeTestObject(result.data, ["token"])).toMatchSnapshot();
});
