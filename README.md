# Base React App

## Installing packages

Our `docker-compose.yml` is set up to shadow `node_modules`. To make sure we can start our services, go to `client` and `graphql` and run

```
yarn
```

Then, to initialise the data base, go to `graphql` and run

```
yarn prisma:deploy
```

## CLI & containers

To start on MacOS, install the CLI command to make development easier. Go to the root of the project and run the init script.

```
./bin/init.sh
```

This will create allow you to use `ccg` in the CLI to control the project from anywhere, not just in the project folder. Typing `ccg` in the CLI will show options. For example:

To build/rebuild (`service_name` is optional):

```
ccg build <service_name>
```

To start the project (`service_name` is optional):

```
ccg start <service_name>
```

To stop the project (`service_name` is optional):

```
ccg stop <service_name>
```

The project should be accessible on http://localhost. It is recommended to add the dev base URL to your hosts file. The default is `http://ccg.com.dockervm`. It should look something like this:

```
127.0.0.1   ccg.com.dockervm
```

This setup step is optional. You can use `docker-compose` from the root of the project as an alternative.

## Graphql

Endpoint + subscription: `/graphql`

Interactive endpoint (graphiql): `/graphql/interactive`

## Prisma

We use prisma (https://www.prisma.io/) as our graphql data layer. Prisma ecosystem helps us create strongly typed TypeScript application end-to-end. The main components of prisma:

- graphql-yoga
- graphqlgen
- Prisma CLI
- Prisma Client

### Basics

Prisma ecosystem consists of multiple layers, all based on graphql and strongly typed. It is designed to take queries / mutations from a client through an endpoint and resolve data with another endpoint. The following graph is the workflow at the highest level

client --> graphQL endpoint --> graphQL server with prisma client --> prisma endpoint --> database

### GraphQL Yoga

grahpql-yoga is a GraphQL server library based on Express.js

### graphqlgen

graphqlgen can be used to generate type safe types from schema. We use this for our resolvers

### Prisma CLI

This is the main package which can be used to run commands to deploy, migrate database and generate all CRUD commands.

### Prisma Client

Prisma client is how the running node application can interact with the database via graphQL API

### Bit

Some packages in this project are hosted on https://bit.dev/. To make sure you can install packages in your host machine, run the following:

```
npm config set '@bit:registry' https://node.bit.dev
```

Made with ♥ by Eddy Nguyen

https://eddy.works

https://github.com/eddeee888/base-react-app
