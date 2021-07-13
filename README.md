# Booble Mix V2

![WIP](https://img.shields.io/badge/status-wip-red)

> A way to make simple recipes with your e-liquide

## Highlights

- GraphQl with [Hasura](https://hasura.io/docs)
- Authentication with [next-auth](https://github.com/nextauthjs/next-auth)
- Theming with [Chakra-UI](https://github.com/chakra-ui/chakra-ui)

## Prerequisite

To be able to launch the hasura backend on your local machine and build the metadata backup you need to have hasura CLI and Docker installed on your machine.

- [Installing the Hasura CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html)
- [Intalling Docker](https://docs.docker.com/get-started/overview/)
- check the .env files

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

> Launch the frontend

```sh
cd frontend
yarn dev
```

> Update frontend to production

pipeline: use github branch to push on vercel with updated .env

```sh
cd frontend
vercel
```

## Maintainers

- [rmsrob][me]
- [dzoukou][dz]

[me]: https://github.com/rmsrob
[dz]: https://github.com/dzoukou
