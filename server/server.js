const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require("./config/connection");
const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 3000;

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

async function startApolloServer() {
  
  await server.start();

  server.applyMiddleware({ app: app });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  db.once("open", () => {
    app.listen(PORT, () =>
      console.log(`🐱 API server running on port ${PORT}!`)
    );
    console.log(
      `🐱 Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startApolloServer()