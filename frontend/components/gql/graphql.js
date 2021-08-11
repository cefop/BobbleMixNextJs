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
            id
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

export const MUTATION_ADD_USER_RECIPE = gql`
    mutation addUserREcipe($rid: uuid, $uid: Int) {
        insert_users_recipes_one(object: { recipe_id: $rid, user_id: $uid }) {
            recipe_id
        }
    }
`;

// WIP delete a recipe on user
export const MUTATION_DELET_USER_RECIPE = gql`
    mutation deleteUsersRecipes {
        delete_users_recipes(
            where: { recipe_id: { _eq: "936002d8-ee1e-4544-915d-6fff2108f153" }, user_id: { _eq: 2 } }
        ) {
            returning {
                user_id
            }
        }
    }
`;

// page/toprecipes.js
export const QUERY_ALL_RECIPES = gql`
    query fetchAllRecipe {
        recipes(order_by: { users_recipes_aggregate: { count: desc }, created_at: desc }) {
            id
            fingerprint
            name
            aromes
            created_at
        }
    }
`;

// WIP page/toprecipes.js
export const QUERY_ALL_RECIPE_RATINGS = gql`
    query fetchAllRecipeRatings {
        recipes(order_by: { users_recipes_aggregate: { count: desc }, created_at: desc }) {
            id
            fingerprint
            name
            aromes
            created_at
            updated_at
            users_recipes_aggregate {
                aggregate {
                    count(columns: user_id, distinct: true)
                }
            }
            users_recipes(order_by: { user: { updated_at: desc } }, limit: 5) {
                user {
                    id
                    name
                    image
                }
            }
        }
    }
`;

// page/profile.js
export const QUERY_USER_RECIPES = gql`
    query fetchUserRecipes($uid: Int) {
        users_recipes(where: { user_id: { _eq: $uid } }, order_by: { recipe: { updated_at: desc } }) {
            recipe {
                id
                name
                fingerprint
                aromes
                created_at
                updated_at
            }
        }
    }
`;

// WIP toprecipe
export const SEARCH_RECIPE_BY_FLAVOR = gql`
    query searchRecipeAromes($search: String) {
        recipes(where: { name: { _ilike: "%$search%" } }, order_by: { updated_at: desc }) {
            id
            fingerprint
            name
            aromes
            created_at
        }
    }
`;
