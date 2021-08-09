import { gql } from '@apollo/client';

// page/mixeur.js
export const FETCH_ITEMS = gql`
    query fetchItems {
        item(order_by: { name: asc }) {
            id
            name
            image
            item_categories {
                category {
                    name
                }
            }
        }
    }
`;

// components/mixeur
export const QUERY_ITEM_CATEGORIES = gql`
    query fetchItemsCategories {
        category(order_by: { item_categories_aggregate: { count: desc } }) {
            id
            name
        }
    }
`;

// components/mixeur
export const MUTATION_INSERT_ONE_RECIPE = gql`
    mutation INSERT_ONE_RECIPE(
        $fingerprint: String
        $name: String
        $nicotine: numeric
        $volume: numeric
        $aromes: jsonb
        $molecules: jsonb
        $risks: jsonb
        $molsum: numeric
    ) {
        insert_recipes_one(
            object: {
                fingerprint: $fingerprint
                name: $name
                nicotine: $nicotine
                volume: $volume
                aromes: $aromes
                molecules: $molecules
                risks: $risks
                molsum: $molsum
            }
        ) {
            created_at
        }
    }
`;

// page/recipe.js + page/fds.js
export const QUERY_FINGERPRINT = gql`
    query fetchRecipeFingerprint($fingerprint: String) {
        recipes(where: { fingerprint: { _eq: $fingerprint } }) {
            id
            fingerprint
            name
            nicotine
            volume
            molsum
            aromes
            molecules
            risks
            created_at
        }
    }
`;

// page/toprecipes.js
export const QUERY_ALL_RECIPES = gql`
    query fetchAllRecipe {
        recipes(order_by: { updated_at: desc }) {
            id
            fingerprint
            name
            nicotine
            volume
            molsum
            aromes
            molecules
            risks
            created_at
        }
    }
`;

// WIP page/profile.js
export const QUERY_USER_RECIPES = gql`
    query fetchUserRecipes {
        recipes(order_by: { updated_at: desc }, limit: 4) {
            id
            fingerprint
            name
            nicotine
            volume
            molsum
            aromes
            molecules
            risks
            created_at
        }
    }
`;

// WIP toprecipe + profile
export const SEARCH_RECIPE_BY_FLAVOR = gql`
    query searchRecipeAromes($search: String) {
        recipes(where: { name: { _ilike: "%$search%" } }, order_by: { updated_at: desc }) {
            id
            fingerprint
            name
            nicotine
        }
    }
`;
