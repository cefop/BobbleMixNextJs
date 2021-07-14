# Booble Mix V2

![WIP](https://img.shields.io/badge/status-wip-red)

> A way to make simple recipes with your e-liquide

## Highlights

- GraphQl with [Hasura](https://hasura.io/docs)
- Theming with [Chakra-UI](https://github.com/chakra-ui/chakra-ui)
- Authentication with [next-auth](https://github.com/nextauthjs/next-auth)

## Prerequisite

To be able to launch the hasura backend on your local machine and build the metadata backup you need to have hasura CLI and Docker installed on your machine.

- [Installing the Hasura CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html)
- [Intalling Docker](https://docs.docker.com/get-started/overview/)
- check the .env files and adjust them if needed:
  - `/frontend` copie `.env.example` to `.env.development`
  - `/hasura` copie `.env.example` to `.env`

To use Next-Auth get yours [Google credential](https://next-auth.js.org/providers/google)

## Install

```sh
cd frontend/
yarn install
```

## Usage

> Launch Hasura on your local machine

```sh
cd hasura
docker-compose up -a # will launch the docker compose in background
make console # will launch the admin hasura panel and keep tracking your changes
# Or for Windows OS without "make" tool
npx hasura console --admin-secret "hasuraadminpassword"
```

> hasura squash migrations

```sh
cd hasura
npx hasura migrate squash --admin-secret "hasuraadminpassword" --name "name-update" --from 0000000 --database-name default
```

> hasura apply migrations to production hasura cloud or VPS

```sh
cd hasura
npx hasura metadata apply --endpoint "https://hasura.mywebsite.com"  --admin-secret "hasuraadminpassword"
```

> hasura insert data to table `item` see `.json` files inside `/db/export_public_item_*.json`

**TODO: build a script to auto import all data to tables with an option to fetch new data from website** `/fetch2import/index.js`

#### Example for Item and Category with MANY 2 MANY relationship

```gql
mutation INSERT_MANY_ITEM {
  insert_item(objects[]){
    returning{
      id
      created_at
    }
  }
}
```

> hasura insert data to table `category` see `.json` files inside `/db/export_public_category_*.json`

```gql
mutation INSERT_MANY_CATEGORY {
  insert_category(objects[]){
    returning{
      id
      created_at
    }
  }
}
```

> hasura insert data to table `item_category` see `.json` files inside `/db/export_public_item_category_*.json`

```gql
mutation INSERT_MANY_ITEM_CATEGORY {
  insert_item_category(objects[]){
    returning{
      id
      created_at
    }
  }
}
```

> Launch the frontend

```sh
cd frontend
yarn dev
```

> Update frontend to production

```sh
cd frontend
vercel --prod
```

**pipeline: use github production branch to push on vercel with updated .env**

## Maintainers

- [rmsrob][me]
- [dzoukou][dz]

[me]: https://github.com/rmsrob
[dz]: https://github.com/dzoukou
