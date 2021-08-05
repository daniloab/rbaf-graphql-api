import { GraphQLObjectType } from "graphql";

import { fromGlobalId, nodeDefinitions } from "graphql-relay";

// import { GraphQLContext } from '../../graphql/types';

type GraphQLContext = {};

type Load = (context: GraphQLContext, id: string) => any;
type TypeLoaders = {
  [key: string]: {
    type: GraphQLObjectType;
    load: Load;
  };
};

const getTypeRegister = () => {
  const typesLoaders: TypeLoaders = {};

  const getTypesLoaders = () => typesLoaders;

  const registerTypeLoader = (type: GraphQLObjectType, load: Load) => {
    typesLoaders[type.name] = {
      type,
      load,
    };

    return type;
  };

  const idFetcher = (globalId, context: GraphQLContext) => {
    const { type, id } = fromGlobalId(globalId);

    const { load } = typesLoaders[type] || { load: null };

    return (load && load(context, id)) || null;
  }

  const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
    ,
    (obj) => {
      console.log("obj", obj);
      console.log("obj.constructor.name", obj.constructor.name);
      const { type } = typesLoaders[obj.constructor.name] || { type: null };
      console.log("type", type);

      return type;
    }
  );

  return {
    registerTypeLoader,
    getTypesLoaders,
    nodeField,
    nodesField,
    nodeInterface,
  };
};

const { registerTypeLoader, nodeInterface, nodeField, nodesField } =
  getTypeRegister();

export { registerTypeLoader, nodeInterface, nodeField, nodesField };
