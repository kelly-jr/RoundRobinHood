# RoundRobinHood

## Project Setup

#### Node

1. Make sure you have `node` installed.
2. Navigate to the project directory and install the project packages by running the following command:

```
  yarn install
```

### Database

The project uses `postgresql`,so make sure you have it installed in your machine.
With postgres installed, Create a table `roundrobinhood` which for the moment uses the default postgres username and password. (username: `postgres`, password: `postgres`)

## Running the project

1. To run the app, run `yarn start`

2. Once you have the project started, you would like to view the endpoints and queries that you're building / create with GraphQL. To do so:
   Navigate to `localhost:4000/graphql` on you browser

### Running migrations

To get upto date with typeORM migration, how to create and run them, follow the [documentation](https://typeorm.io/#/migrations/) reference.

- To generate migrations:

```
yarn typeorm migration:generate -n ${nameOfMigration}
```

- To run the migrations:
  ```
  yarn typeorm migration:run
  ```

## Reference Material

The list below shows a list of all the reference materials used in this project

- [TypeORM](https://typeorm.io/#/) - This ORM was preferred over MikrORM, though the two are very similar and interchangeable in alot of ways.
- [TypeGraphQL](https://typegraphql.com/) - The documentation will guide you to working with GraphQL in Typescript
