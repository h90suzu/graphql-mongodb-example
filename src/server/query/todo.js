/**
 * GraphQL Query Todo
 */

import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import { Todo } from '../models';
import { TodoType } from '../types';

export default {
  type: TodoType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (root, { id }) => {
    return new Promise((resolve, reject) => {
      Todo.findById(id, (err, todo) => {
        err ? reject(err) : resolve(todo);
      });
    });
  },
};
