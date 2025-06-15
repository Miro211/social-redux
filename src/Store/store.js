import { createStore,combineReducers } from "redux";
import usersReducer from "./Reducers/useReducer";
const rootReducer = combineReducers({
    usersPage : usersReducer
})
export const store = createStore(rootReducer)

