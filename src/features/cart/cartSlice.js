import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartService from "./cartService";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
  count:'',
  isLoading: false,
};

export const getCart = createAsyncThunk(
  "products/cart/",
  async ({page_size,page}, thunkAPI) => {
    try {
      const response = await cartService.getCart(page_size,page);
      console.log("respons", response);
      
      return response;
    } catch (error) {
      console.log(error?.response?.data?.detail)
      if (error?.response?.data?.detail === "Authentication credentials were not provided.") {
          toast.error(error?.response?.data?.detail)
          window.location.replace('/login')
      }
      else {
          toast.error(error?.response?.data?.detail || 'An error Occured')
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const postCart = createAsyncThunk(
  "post/products/cart/",
  async (userData, thunkAPI) => {
    try {
      const response = await cartService.postCart(userData);
      toast.success("Added to Cart!");
      return response;
    } catch (error) {
      console.log(error?.response?.data?.detail)
      if (error?.response?.data?.detail === "Authentication credentials were not provided.") {
          toast.error(error?.response?.data?.detail)
          window.location.replace('/login')
      }
      else {
          toast.error(error?.response?.data?.detail || 'An error Occured')
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const putCart = createAsyncThunk(
  "put/products/cart",
  async ({ id, quantity }, thunkAPI) => {
    try {
      const response = await cartService.putCart(id, { quantity });
      toast.success("Cart updated successfully!");
      return response;
    } catch (error) {
      console.log(error?.response?.data?.detail)
      if (error?.response?.data?.detail === "Authentication credentials were not provided.") {
          toast.error(error?.response?.data?.detail)
          window.location.replace('/login')
      }
      else {
          toast.error(error?.response?.data?.detail || 'An error Occured')
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred while updating the cart"
      );
    }
  }
);

export const deleteCart = createAsyncThunk(
  "delete/products/cart/",
  async (id, thunkAPI) => {
    try {
      const response = await cartService.deleteCart(id);
      toast.success("Deleted From Cart!");
      return response;
    } catch (error) {
    
      console.log(error?.response?.data?.detail)
      if (error?.response?.data?.detail === "Authentication credentials were not provided.") {
          toast.error(error?.response?.data?.detail)
          window.location.replace('/login')
      }
      else {
          toast.error(error?.response?.data?.detail || 'An error Occured')
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isLoading: false,
    count:0
  },
  reducers: {
    cartReset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
       
        state.cart =action.payload.results;
        state.count = action.payload.count
        console.log("get cart", action.payload);
      })
      .addCase(postCart.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(postCart.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart.push(action.payload)
        console.log("add cart", action.payload);
      })
      .addCase(putCart.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("updated cart", action.payload);
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.isLoading = false;
      
        console.log("deleted Carts", action.payload);
      });
  },
});

export const { cartReset } = cartSlice.actions;
export default cartSlice.reducer;
