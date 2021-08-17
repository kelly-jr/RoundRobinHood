import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import ormconfig from "./ormconfig";
import { SessionResolver, UserResolver } from "./resolvers";


const main = async () => {
  const orm = await createConnection(ormconfig);

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({ resolvers: [SessionResolver, UserResolver], validate: false }),
    context: () => ({ orm }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("%cServer started on localhost:4000", "color: green");
  });

  // Create dummy record
  // orm
  //   .createQueryBuilder()
  //   .insert()
  //   .into(Session)
  //   .values([
  //     {
  //       joiningCode: "test_code",
  //       sessionExpiry: new Date(),
  //     },
  //   ])
  //   .execute();
};

main();
