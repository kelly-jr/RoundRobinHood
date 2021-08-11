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

There are 2 ways to run the project. The first method is the preferred method and provides a faster compile time:

1.Using two terminals, watch for typescript changes, and run the compiled js file

```
# First terminal
yarn watch

#Second terminal
yarn dev

```

2. Using the 2nd start which uses `ts-node` to run the ts file

```
yarn start2
```

## Reference Material

MIKRORM - https://mikro-orm.io/docs/installation
