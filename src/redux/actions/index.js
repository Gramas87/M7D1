export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"

export const addFavoritesAction = (companyToAdd) => ({
    type: ADD_TO_FAVORITES,
    payload: companyToAdd
})