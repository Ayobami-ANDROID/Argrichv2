import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../src/features/auth/authSlice";
import productReducer from "../../src/features/product/productSlice";
import cartReducer from "../../src/features/cart/cartSlice";
import categoryReducer from "../features/category/categorySlice";
import deleteAccountReducer from "../features/deleteaccountmodal/deleteaccountslice";
import accountReducer from "../features/account/accountSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
    product: productReducer,
    cart: cartReducer,
    category: categoryReducer,
    deleteAccount: deleteAccountReducer,
  },
});

export default store;
