import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";

const app = express();

async function init() {
  // Middleware injections
  app.use(express.json());

  const gqlServer = new ApolloServer({
    typeDefs: `
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => `hey there, I'm a gql server.`,
      },
    },
  });

  await gqlServer.start();
  app.use("/gql", expressMiddleware(gqlServer));
}

init();

export { app };
