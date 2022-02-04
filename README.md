# Booble Mix V2

![WIP](https://img.shields.io/badge/status-wip-red)

> An app that eases mixing e-liquids together and gets MSDS and molecules hazard information put together

## Highlights

- Make some eliquide recipe with many aroma and see yours on your profile
- See all recipes of all users
- Eatch recipe got its generated MSDS (FDS french formated)
- Eatch recipe got its generated label to stick on the bottle (french formated)

## Prerequisite

To launch the hasura backend on your local machine and build the metadata you need to have hasura CLI and Docker installed.

- [Intalling Docker](https://docs.docker.com/get-started/overview/)
- [Installing the Hasura CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html)

- check the .env files and adjust them if needed:
  - `/frontend` copie `.env.example` to `.env.development`
  - `/hasura` copie `.env.example` to `.env`

To use Next-Auth get yours [Github credential](https://next-auth.js.org/providers/github)

## Install

```sh
cd frontend/
yarn install
```

## Usage

> Launch Hasura on your local machine

```sh
cd hasura
make jwt
# it will copy .env.example to .env and create JWT token inside your .env
docker network create app-netrunner_bbm
# create docker network
```


```sh
cd hasura
docker-compose up -d # will launch the docker compose in background
make console # will launch the admin hasura panel and keep tracking your changes
# Or for Windows OS without "make" tool
npx hasura console --admin-secret "hasuraadminpassword"
```

> Resolve docker-compose up error postgres PID already in use

```sh
docker stop $(docker ps -a -q)
docker ps  #to make sure containers is off
sudo lsof -i tcp:5432 # now you get and list of process running and using 5432 port find and copy PID
sudo kill -9 yout_PID
```

> Launch NextJs frontend

```sh
cd frontend
yarn dev
```

> hasura squash migrations

```sh
cd hasura
npx hasura migrate squash --admin-secret "hasuraadminpassword" --name "name-update" --from 0000000 --database-name default
```

> hasura apply migrations to production hasura cloud or VPS

```sh
cd hasura
npx hasura migrate apply
```

**TODO: build a script to auto import all data to tables with an option to fetch new data from website** `/fetch2import/index.js`

> hasura mutation INSERT_MANY_ITEM

```gql
mutation INSERT_MANY_ITEM($items: [item_insert_input!]!) {
  insert_item(objects: $items) {
    returning {
      id
      created_at
    }
  }
}
```

variables: `items` see `.json` files inside `hasura/fetch2import/src/data/export_public_item_*.json`

```json
{ "items": [{}] }
```

> hasura mutation INSERT_MANY_CATEGORY

```gql
mutation INSERT_MANY_CATEGORY($categories: [category_insert_input!]!) {
  insert_category(objects: $categories) {
    affected_rows
    returning {
      id
      created_at
    }
  }
}
```

variables: `categories` see `.json` files inside `hasura/fetch2import/src/data/export_public_category_*.json`

```json
{ "categories": [{}] }
```

> hasura INSERT_MANY_ITEM_CATEGORY

```gql
mutation INSERT_MANY_ITEM_CATEGORY($items_cat: [item_category_insert_input!]!) {
  insert_item_category(objects: $items_cat) {
    returning {
      item_id
    }
  }
}
```

variables: `items_cat` see `.json` files inside `/hasura/fetch2import/src/data/export_public_item_category_*.json`

```json
{ "items_cat": [{}] }
```

> Launch the frontend

```sh
cd frontend
yarn dev
```

## 🚀 Deployment

> Update frontend to production

```sh
# udate your /frontend/.env.production if needed
cd frontend
vercel --prod
```

> Update the backend Hasura

Use the Hasura CLI or go directly on hasura Cloud to update it

```sh
cd hasura
npx hasura metadata apply --endpoint "https://hasura.mywebsite.com"  --admin-secret "hasuraadminpassword"
```

## 👏🏽 Contributing Guidelines

See CONTRIBUTING.md

Thanks to them 🤝

## Maintainers

**Gatekeepers**:

Only the following people have merge access for the master branch.

- [rmsrob][me]

[me]: https://github.com/rmsrob
