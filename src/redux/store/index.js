import {createStore} from "redux";
import mainReducer from "../reducers"

export const initialState = {
    favorites: {
        companies: [],
    },
    // searchResult: {
    //  companies: [],
    // }
}

export const configureStore = createStore(
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)