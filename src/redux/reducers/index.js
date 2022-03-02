 import {initialState} from "../store"
 import { ADD_TO_FAVORITES } from "../actions"

 const mainReducer = (state = initialState, action) => {
     switch (action.type) {
         case ADD_TO_FAVORITES:
         return {
             ...state,
             favorites: {
                 ...state.favorites,
                 companies: [...state.favorites.companies, action.payload],

             }
         }
         default:
             return state
     }
    
 }

 export default mainReducer