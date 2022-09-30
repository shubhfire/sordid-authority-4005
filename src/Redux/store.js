import {
    legacy_createStore,
    applyMiddleware,
    combineReducers,
    compose,
  } from "redux";
  import { reducer as AppReducer } from "./AppReducer/reducer";
  import thunk from "redux-thunk";
  
  
  const rootReducer = combineReducers({ AppReducer});
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
  
  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  