import mongoose from 'mongoose';

import { Todo } from './src/server/models';

mongoose.connect('mongodb://localhost/graphql-mongodb-example');

const todos = [
  {
    _id: '559645cd1a38532d14349240',
    title: 'make graphql server',
    completed: true,
  },
  {
    _id: '559645cd1a38532d14349241',
    title: 'add flowtype',
    completed: false,
  },
  {
    _id: '559645cd1a38532d14349242',
    title: 'add api client',
    completed: true,
  },
  {
    _id: '559645cd1a38532d14349246',
    title: 'make client side react application',
    completed: false,
  },
];

mongoose.connection.collections['todos'].drop((err) => {
  Todo.create(todos, function(err, res){
    console.log(err || 'seed data created.');
    process.exit();
  });
});
