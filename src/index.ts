import { __prod__ } from "./constants";
import "reflect-metadata";
import { createConnection } from "typeorm";
import ormconfig from "./ormconfig";

createConnection(ormconfig)
  .then(() => {
    // here you can start to work with your entities
  })
  .catch((error) => console.log(error));
