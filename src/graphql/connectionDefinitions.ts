import {
  GraphQLBoolean,
  GraphQLFieldConfigArgumentMap,
  GraphQLFieldConfigMap,
  GraphQLFieldResolver,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  Thunk,
} from "graphql";

export const forwardConnectionArgs: GraphQLFieldConfigArgumentMap = {
  after: {
    type: GraphQLString,
  },
  first: {
    type: GraphQLInt,
  },
};

export const backwardConnectionArgs: GraphQLFieldConfigArgumentMap = {
  before: {
    type: GraphQLString,
  },
  last: {
    type: GraphQLInt,
  },
};

export const connectionArgs: GraphQLFieldConfigArgumentMap = {
  ...forwardConnectionArgs,
  ...backwardConnectionArgs,
};

type ConnectionConfig = {
  name?: string | null;
  nodeType: GraphQLObjectType;
  resolveNode?: GraphQLFieldResolver<any, any> | null;
  resolveCursor?: GraphQLFieldResolver<any, any> | null;
  edgeFields?: Thunk<GraphQLFieldConfigMap<any, any>> | null;
  connectionFields?: Thunk<GraphQLFieldConfigMap<any, any>> | null;
};

export type GraphQLConnectionDefinitions = {
  edgeType: GraphQLObjectType;
  connectionType: GraphQLObjectType;
};

const pageInfoType = new GraphQLObjectType({
  name: "PageInfoExtended",
  description: "Information about pagination in a connection.",
  fields: () => ({
    hasNextPage: {
      type: GraphQLNonNull(GraphQLBoolean),
      description: "When paginating forwards, are there more items?",
    },
    hasPreviousPage: {
      type: GraphQLNonNull(GraphQLBoolean),
      description: "When paginating backwards, are there more items?",
    },
    startCursor: {
      type: GraphQLString,
      description: "When paginating backwards, the cursor to continue.",
    },
    endCursor: {
      type: GraphQLString,
      description: "When paginating forwards, the cursor to continue.",
    },
  }),
});

function resolveMaybeThunk<T>(thingOrThunk: Thunk<T>): T {
  return typeof thingOrThunk === "function"
    ? (thingOrThunk as () => T)()
    : thingOrThunk;
}

export function connectionDefinitions(
  config: ConnectionConfig
): GraphQLConnectionDefinitions {
  const { nodeType, resolveCursor, resolveNode } = config;
  const name = config.name || nodeType.name;
  const edgeFields = config.edgeFields || {};
  const connectionFields = config.connectionFields || {};

  const edgeType = new GraphQLObjectType({
    name: `${name}Edge`,
    description: "An edge in a connection.",
    fields: () => ({
      node: {
        type: nodeType,
        resolve: resolveNode,
        description: "The item at the end of the edge",
      },
      cursor: {
        type: GraphQLNonNull(GraphQLString),
        resolve: resolveCursor,
        description: "A cursor for use in pagination",
      },
      ...(resolveMaybeThunk(edgeFields) as any),
    }),
  });

  const connectionType = new GraphQLObjectType({
    name: `${name}Connection`,
    description: "A connection to a list of items.",
    fields: () => ({
      count: {
        type: GraphQLInt,
        description: "Number of items in this connection",
      },
      totalCount: {
        type: GraphQLInt,
        resolve: (connection) => connection.count,
        description: `A count of the total number of objects in this connection, ignoring pagination.
  This allows a client to fetch the first five objects by passing "5" as the
  argument to "first", then fetch the total count so it could display "5 of 83",
  for example.`,
      },
      startCursorOffset: {
        type: GraphQLNonNull(GraphQLInt),
        description: "Offset from start",
      },
      endCursorOffset: {
        type: GraphQLNonNull(GraphQLInt),
        description: "Offset till end",
      },
      pageInfo: {
        type: GraphQLNonNull(pageInfoType),
        description: "Information to aid in pagination.",
      },
      edges: {
        type: GraphQLNonNull(GraphQLList(edgeType)),
        description: "A list of edges.",
      },
      ...(resolveMaybeThunk(connectionFields) as any),
    }),
  });

  return { edgeType, connectionType };
}
