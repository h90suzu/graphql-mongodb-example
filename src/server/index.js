import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/graphql-mongodb-example');

express()
  .use('/graphql', graphqlHTTP({ schema, pretty: true,}))
  .listen(3000);

console.log('Graphql server running on http://localhost:3000/graphql');
