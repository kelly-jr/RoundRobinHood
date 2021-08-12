import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import ormconfig from "./ormconfig";
import { HelloResolver } from "./resolvers/hello";

const main = async () => {
  // Creates database connection
  createConnection(ormconfig)
    .then(() => {
      // here you can start to work with your entities
    })
    .catch((error) => console.log(error));

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({ resolvers: [HelloResolver], validate: false }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("%cServer started on localhost:4000", "color: green");
  });
};

main();
