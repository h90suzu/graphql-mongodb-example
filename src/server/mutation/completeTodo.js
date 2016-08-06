/**
 * GraphQL Mutation Complete Todo
 */

import {
  GraphQLID,
  GraphQLNonNull,
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
      Todo.findByIdAndUpdate(id, {
        completed: true,
      }, (err, res) => {
        if (err) {
          reject(err);
        }
        Todo.findById(id, (err, todo) => {
          resolve(todo);
        });
      });
    });
  },
};
