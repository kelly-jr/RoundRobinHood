import { createConnection } from "typeorm";
import { __prod__ } from "./constants";

export default {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "roundrobinhood",
  synchronize: true,
  logging: !__prod__,
  entities: ["src/entities/**/*.ts"],
  migrations: ["migration/**/*.ts"],

  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "migration",
  },
  migrationsRun: true,
} as Parameters<typeof createConnection>[0];
