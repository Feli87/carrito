import { combineReducers } from "redux";
import userReducers from "./user/user.reducers.js";
import cartReducers from "./cart/cart.reducers.js";
import productsReducers from "./products/products.reducers.js";

export default combineReducers({
  userReducers,
  cartReducers,
  productsReducers
});
