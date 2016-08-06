/**
 * GraphQL Query
 */

import { GraphQLObjectType } from 'graphql';

import todo from './todo';
import todos from './todos';

export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    todo,
    todos,
  },
});
