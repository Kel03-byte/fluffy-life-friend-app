const express = require('express');
const { ApolloServer } = require('apollo-server-express');

async function startApolloServer() {
  const typeDefs = require('./schemas/typeDefs')
  const resolvers = require('./schemas/resolvers');
  
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🐱 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}
 
startApolloServer()