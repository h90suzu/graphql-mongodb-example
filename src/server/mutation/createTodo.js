/**
 * GraphQL Mutation Create Todo
 */

import { GraphQLString } from 'graphql';

import { Todo } from '../models';
import { TodoType } from '../types';

export default {
  type: TodoType,
  args: {
    title:{
      name: 'title',
      type: GraphQLString,
    },
  },
  resolve: (root, { title }) => {
    const todo = new Todo({ title });

    return new Promise((resolve, reject) => {
      todo.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  },
};
