import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'todo',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      title: {
        type: GraphQLString,
      },
      completed: {
        type: GraphQLBoolean,
      },
    }),
});
