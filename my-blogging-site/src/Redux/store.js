import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import AuthReducer from "./Auth/AuthReducer";
// import TodoReducer from "./Todo/TodoReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  auth: AuthReducer,
  // todo: TodoReducer,
});

// const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer
  // compose(
  //   applyMiddleware(thunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);
