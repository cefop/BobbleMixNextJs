import fetch from 'node-fetch';
// import { BATCH_INSERT_CATEGORY, graphQLClient } from './src/graphql.js';

const githubURL =
  'https://raw.githubusercontent.com/cefop/BobbleMixNextJs/master/hasura/db/';
const cateArr = `${githubURL}export_public_category_2021_07_13_01_36_21_565.json`;
const itemArr = `${githubURL}export_public_item_2021_07_13_01_37_41_497.json`;
const itemcateArr = `${githubURL}export_public_item_category_2021_07_13_01_38_28_116`;

async function insCategories(link) {
  console.log(`DATA FROM: ${link}!`);
  const res = await fetch(link).then((r) => r.json());
  console.log(res);
  // Run graphql insert mutation for category
  // await graphQLClient.request(BATCH_INSERT_CATEGORY, {
  //   categories: res,
  // });
}
insCategories(cateArr);

async function insItems(link) {
  console.log(`DATA FROM: ${link}!`);
  const res = await fetch(link).then((r) => r.json());
  console.log(res);
  // Run graphql insert mutation for category
  // await graphQLClient.request(BATCH_INSERT_CATEGORY, {
  //   categories: res,
  // });
}
insItems(itemArr);

async function insItemsCategories(link) {
  console.log(`DATA FROM: ${link}!`);
  const res = await fetch(link).then((r) => r.json());
  console.log(res);
  // Run graphql insert mutation for category
  // await graphQLClient.request(BATCH_INSERT_CATEGORY, {
  //   categories: res,
  // });
}
insItemsCategories(itemcateArr);
