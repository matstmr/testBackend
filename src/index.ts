import "reflect-metadata";
import * as dotenv from "dotenv";
import { dataSource } from './config/db';
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { PaysResolver } from "./resolvers/pays.resolver";
import { startStandaloneServer } from "@apollo/server/standalone";

const port: number = 3001;

const start = async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [PaysResolver],
    validate: { forbidUnknownValues: false },
  });

  const server = new ApolloServer({
    schema,
  });

  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port },
    });

    console.log(`🚀 Server ready at ${url}`);
  } catch (err) {
    console.error("Error starting the server", err);
  }
};

void start();