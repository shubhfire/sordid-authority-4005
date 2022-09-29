import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
// import reducer from "./authReducer/reducer"
import {reducer as AuthReducer} from "./authReducer/reducer"

const rootReducer=combineReducers({
    AuthReducer
})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
// const store=legacy_createStore(reducer)
export default store