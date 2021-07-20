import fetch from 'node-fetch';
// import { BATCH_INSERT_CATEGORY, graphQLClient } from './src/graphql.js';

const githubURL =
  'https://raw.githubusercontent.com/cefop/BobbleMixNextJs/master/hasura/db/';
const cateArr = `${githubURL}export_public_category_2021_07_13_01_36_21_565.json`;
const itemArr = `${githubURL}export_public_item_2021_07_13_01_37_41_497.json`;
// const catJSON = './src/data/test.json';

async function goCategories(fetch1) {
  console.log(`Get Category data at ${fetch1}!`);
  const res = await fetch(fetch1).then((r) => r.json());
  console.log(res);
  // Run graphql insert mutation for category
  // await graphQLClient.request(BATCH_INSERT_CATEGORY, {
  //   categories: res,
  // });
}
goCategories();
