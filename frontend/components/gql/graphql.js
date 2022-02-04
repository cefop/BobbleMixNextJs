import { gql } from '@apollo/client';

// Home page
export const QUERY_ACTIVE_AROME = gql`
    query activeItems {
        item(where: { active: { _eq: true } }) {
            id
        }
    }
`;

// page/mixeur.js
export const FETCH_ITEMS = gql`
    query fetchItems {
        item(order_by: { name: asc }, where: { active: { _eq: true } }) {
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

// components/mixeur
export const MUTATION_ADD_USER_RECIPE = gql`
    mutation addUserREcipe($rid: uuid, $uid: Int) {
        insert_users_recipes_one(object: { recipe_id: $rid, user_id: $uid }) {
            recipe_id
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

// WIP delete a recipe on user
export const MUTATION_DELET_USER_RECIPE = gql`
    mutation deleteUsersRecipes($rid: uuid, $uid: Int) {
        delete_users_recipes(where: { recipe_id: { _eq: $rid }, user_id: { _eq: $uid } }) {
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
            users_recipes_aggregate {
                aggregate {
                    count(columns: user_id)
                }
                nodes {
                    user {
                        id
                        image
                        name
                        email
                    }
                }
            }
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

// page/recipe
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

// page/profile.js
export const QUERY_USER_PROFILE = gql`
    query fetchUserProfile($uid: Int) {
        users(where: { id: { _eq: $uid } }) {
            id
            name
            image
            email
            shops(where: { isValid: { _eq: true } }) {
                id
                name
            }
            users_recipes(order_by: { recipe: { updated_at: desc, users_recipes_aggregate: { count: desc } } }) {
                recipe {
                    name
                    fingerprint
                    created_at
                    users_recipes_aggregate {
                        aggregate {
                            count
                        }
                    }
                }
            }
        }
    }
`;

export const QUERY_USER_IS_SHOP = gql`
    query fetchUserProfile($email: String!) {
        users(where: { email: { _eq: $email } }) {
            id
            name
            image
            email
            shops(where: { isValid: { _eq: true } }) {
                id
                name
                phone
                email
                address
                isValid
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

// Create a Shop
export const CREATE_USER_SHOP = gql`
    mutation CREATE_SHOP($name: String, $address: String, $phone: String, $email: String, $userId: Int) {
        insert_shops_one(object: { name: $name, address: $address, phone: $phone, email: $email, userId: $userId }) {
            id
        }
    }
`;

// Create a unique transaction for a shop user
// should happend inside the etiquette app to validate the TX and phone number
export const CREATE_USER_TX_FOR_SHOP = gql`
    mutation CreateUserTxForShop($recipe_id: uuid, $shop_id: uuid, $user_phone: String, $validated: Boolean) {
        insert_transactions_one(
            object: { recipe_id: $recipe_id, shop_id: $shop_id, user_phone: $user_phone, validated: $validated }
        ) {
            id
        }
    }
`;

// For a Shop Find his user transactions
export const SHOP_FIND_USER_TX = gql`
    query ShopFindUserTx($shop_id: uuid) {
        transactions(where: { shop_id: { _eq: $shop_id } }, order_by: { created_at: desc }) {
            id
            created_at
            validated
            user_phone
            recipe {
                name
                id
            }
        }
    }
`;
