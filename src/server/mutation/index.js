/**
 * GrahQL Mutation
 */

import { GraphQLObjectType } from 'graphql';

import createTodo from './createTodo';
import completeTodo from './completeTodo';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTodo,
    completeTodo,
  },
});
