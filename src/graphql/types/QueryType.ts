import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} from "graphql";

import { connectionArgs } from "graphql-relay";

import UserType from "../modules/user/UserType";

import PlayerType, { PlayerConnection } from "../modules/player/PlayerType";
import Player from "../modules/player/PlayerModel";

import CoachType, { CoachConnection } from "../modules/coach/CoachType";
import Coach from "../modules/coach/CoachModel";

import { CoachLoader, PlayerLoader, UserLoader } from "../loader";

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
      resolve: (obj, args, context) => UserLoader.loadUsers(context, args),
    },
    player: {
      type: PlayerType,
      args: { _id: { type: GraphQLString } },
      resolve: async (parent, args) => {
        return await Player.findById(args._id);
      },
    },
    players: {
      type: PlayerConnection.connectionType,
      args: {
        ...connectionArgs,
        status: {
          type: GraphQLInt,
          description: "Status players - 1: enable; 99: disabled",
        },
        new: {
          type: GraphQLString,
          description:
            "Date - the newest players added until 10 days before from this date",
        },
      },
      resolve: (obj, args, context) => PlayerLoader.loadPlayers(context, args),
    },
    coach: {
      type: CoachType,
      args: { _id: { type: GraphQLString } },
      resolve: async (parent, args) => {
        return await Coach.findById(args._id);
      },
    },
    coaches: {
      type: CoachConnection.connectionType,
      description: "get all coaches",
      args: {
        ...connectionArgs,
        staff: {
          type: GraphQLInt,
          description:
            "Coaches per squad - 1: offense; 2: defense; 3: special teams",
        },
      },
      resolve: (obj, args, context) => CoachLoader.loadCoaches(context, args),
    },
  }),
});
