const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const requireText = require('require-text');
const typeDefs = requireText('./schema.gql', require);
const resolvers = require('./resolver');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: 8080 }, () =>
  console.log(`🚀 Server ready at http://localhost:8080`)
);