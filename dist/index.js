"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("./ormconfig"));
const hello_1 = require("./resolvers/hello");
const main = async () => {
    typeorm_1.createConnection(ormconfig_1.default)
        .then(() => {
    })
        .catch((error) => console.log(error));
    const app = express_1.default();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await type_graphql_1.buildSchema({ resolvers: [hello_1.HelloResolver], validate: false }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log("%cServer started on localhost:4000", "color: green");
    });
};
main();
//# sourceMappingURL=index.js.map