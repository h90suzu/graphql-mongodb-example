/**
 * GraphQL Query Todos
 */

import {
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';

import { Todo } from '../models';
import { TodoType } from '../types';

export default {
  type: new GraphQLList(TodoType),
  args: {
    completed: {
      name: 'completed',
      type: GraphQLBoolean,
    },
  },
  resolve: (root, { completed }) => {
    const wheres = {};
    if (typeof(completed) !== "undefined") {
      wheres.completed = completed;
    }

    return new Promise((resolve, reject) => {
      Todo.find(wheres, (err, todos) => {
        err ? reject(err) : resolve(todos);
      });
    });
  },
};
