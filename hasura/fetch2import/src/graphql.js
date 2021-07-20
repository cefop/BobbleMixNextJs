import { gql, GraphQLClient } from 'graphql-request';

const endpoint =
  process.env.HASURA_ENDPOINT ?? 'http://localhost:8080/v1/graphql';
const adminSecret =
  process.env.HASURA_GRAPHQL_ADMIN_SECRET ?? 'hasuraadminpassword';

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    'x-hasura-admin-secret': adminSecret,
  },
});

export const BATCH_INSERT_CATEGORY = gql`
  mutation BATCH_INSERT_CATEGORY($categories: [category_insert_input!]!) {
    insert_category(objects: $categories) {
      affected_rows
      returning {
        id
        created_at
      }
    }
  }
`;
