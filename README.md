# LEARND

Note: This setup is for Mac, you will have to do the equivalent if you use Linux or Windows

## Overview

- Runs on Docker. More on Docker [here](./docs/DOCKER.md).
- Stack: React, GraphQL, Express, Prisma and TypeScript. More on the stack [here](./docs/STACK.md)
- Has scripts to set up and run main app commands. All scripts are located [here](./bin/)

## Getting started

### 🔌 Installing packages

Our `docker-compose.yml` is set up to shadow `node_modules`. To make sure we can start our services, go to `/client` and `/graphql` and run yarn to install packages:

```
~/ccg/client $ yarn
```

```
~/ccg/graphql $ yarn
```

Then, to initialise the data base with seed, go to `graphql` and run

```
~/ccg/graphql $ yarn prisma:deploy && yarn prisma:seed
```

### 🌟 Setting up CLI (Recommended)

To start on MacOS, install the CLI command to make development easier. Go to the root of the project and run the init script.

```
~/ccg/bin/init.sh
```

More on how it works [here](./docs/INIT.md)

### ⚡️ Start the App!

### Set up a custom DNS resolver

```
$ ccg vm-up
```

### Turn on the containers the first time

If you have ran the init script, you can run the following command from anywhere:

```
$ ccg build
```

Check the logs in your `client` and `graphql` containers:

```
$ ccg logs -f client
```

```
$ ccg logs -f graphql
```

Once they have successfully built, go to the following URL from your favourite browser:

```
http://ccg.com.vm/
```

### Start containers without building

```
$ ccg start
```

### Turn off everything

```
$ ccg vm-down
```

Based on https://github.com/eddeee888/base-react-app

Made with ♥ by: 

- Eddy Nguyen - https://eddy.works - https://github.com/eddeee888
- Jason D'souza - https://github.com/jvdsouza
- Jon Leighton - https://github.com/jonleighton
- David Johnston - https://github.com/dwjohnston
- David Yeshi - https://github.com/davidyeshi

