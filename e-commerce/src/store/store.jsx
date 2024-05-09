import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./reducers/UserReducer";
import productReducer from "./reducers/ProductReducer";
import shoppingCartReducer from "./reducers/ShoppingCartReducer";
import logger from "redux-logger";
export const reducers = combineReducers({
  user: userReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});
export const store = createStore(reducers, applyMiddleware(thunk, logger));
