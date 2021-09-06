# Booble Mix V2

![WIP](https://img.shields.io/badge/status-wip-red)

> A way to make simple recipes with your e-liquide

## Highlights

- Make some eliquide recipe with many aroma and see yours on your profile
- See all recipe of all users
- Eatch recipe got its generated MSDS (FDS french formated)
- Eatch recipe got its generated label to stick on the bottle (french formated)

## Prerequisite

To be able to launch the hasura backend on your local machine and build the metadata backup you need to have hasura CLI and Docker installed on your machine.

- [Installing the Hasura CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html)
- [Intalling Docker](https://docs.docker.com/get-started/overview/)
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

**pipeline: use github production branch to push on vercel with updated .env**

> Update frontend to production

**Uncomment this paragraph inside `frontend/pages/api/auth/[...nextauth].js` file**

```js
        extra: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
```

```sh
cd frontend
vercel --prod
```

## 👏🏽 Contributing Guidelines

See CONTRIBUTING.md

**Gatekeepers**:

Only the following people have merge access for the master branch.

- [rmsrob][me]

## Maintainers

- [rmsrob][me]
- [dzoukou][dz]

[me]: https://github.com/rmsrob
[dz]: https://github.com/dzoukou
