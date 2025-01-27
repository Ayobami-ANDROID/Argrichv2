import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  product: null,
  isLoading: false,
};
export const getProducts = createAsyncThunk(
  "products/",
  async ({ page_size, page }, thunkAPI) => {
    try {
      const response = await productService.getProducts(page_size, page);
      return response;
    } catch (error) {
      
      if (
        error?.response?.data?.detail ===
        "Authentication credentials were not provided."
      ) {
        toast.error(error?.response?.data?.detail);
        window.location.replace("/login");
      } else {
        toast.error(error?.response?.data?.detail || "An error Occured");
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const getInitializePayment = createAsyncThunk(
  "/payment/",
   async(_,thunkAPI) => {
    try {
      const response = await productService.initializePayment()
      return response
    } catch (error) {
      if (
        error?.response?.data?.detail ===
        "Authentication credentials were not provided."
      ) {
        toast.error(error?.response?.data?.detail);
        window.location.replace("/login");
      } else {
        toast.error(error?.response?.data?.detail || "An error Occured");
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
   }
)

export const getSingleProduct = createAsyncThunk(
  "products/id/",
  async (id, thunkAPI) => {
    try {
      const response = await productService.getSingleProduct(id);
      return response;
    } catch (error) {
      
      if (
        error?.response?.data?.detail ===
        "Authentication credentials were not provided."
      ) {
        toast.error(error?.response?.data?.detail);
        window.location.replace("/login");
      } else {
        toast.error(error?.response?.data?.detail || "An error Occured");
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const createOrder = createAsyncThunk(
  "products/orders/",
  async (userData, thunkAPI) => {
    try {
      const response = await productService.createProductOrder(userData);
      
      return response;
    } catch (error) {
    
      if (
        error?.response?.data?.detail ===
        "Authentication credentials were not provided."
      ) {
        toast.error(error?.response?.data?.detail);
        window.location.replace("/login");
      } else {
        toast.error(error?.response?.data?.detail || "An error Occured");
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const getOrder = createAsyncThunk(
  "'getproducts/orders/",
  async (_, thunkAPI) => {
    try {
      const response = await productService.getProductOrder();
      return response;
    } catch (error) {
  
      if (
        error?.response?.data?.detail ===
        "Authentication credentials were not provided."
      ) {
        toast.error(error?.response?.data?.detail);
        window.location.replace("/login");
      } else {
        toast.error(error?.response?.data?.detail || "An error Occured");
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const getOrderById = createAsyncThunk(
  "'getproductsById/orders/",
  async (id, thunkAPI) => {
    try {
      const response = await productService.getProductOrderById(id);
      return response;
    } catch (error) {
     
      if (
        error?.response?.data?.detail ===
        "Authentication credentials were not provided."
      ) {
        toast.error(error?.response?.data?.detail);
        window.location.replace("/login");
      } else {
        toast.error(error?.response?.data?.detail || "An error Occured");
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const getSearchProduct = createAsyncThunk(
  "products/search",
  async ({ name, search, page_size, page }, thunkAPI) => {
    try {
      const response = await productService.getSearchProduct(name, search,page_size,page);
      return response;
    } catch (error) {
      
      if (
        error?.response?.data?.detail ===
        "Authentication credentials were not provided."
      ) {
        toast.error(error?.response?.data?.detail);
        window.location.replace("/login");
      } else {
        toast.error(error?.response?.data?.detail || "An error Occured");
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    orders: [],
    order: {},
    product: {},
    count: 0,
    isLoading: false,
  },
  reducers: {
    productReset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.results;
        state.count = action.payload.count;
        
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
      
      })
      .addCase(getSingleProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSearchProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSearchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.count = action.payload.count;
        state.products = action.payload.results;
      })
      .addCase(getSearchProduct.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        const { results } = action.payload;
        state.orders = results;
       
      })
      .addCase(getOrderById.pending, (state, action) => {
        state.isLoading = ture;
      })
      .addCase(getOrderById.rejected, (state, asction) => {
        state.isLoading = false;
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload;
      })
      .addCase(getInitializePayment.pending,(state,action)=>{
        state.isLoading = true;
      })
      .addCase(getInitializePayment.rejected,(state,action) => {
        state.isLoading = false
      })
      .addCase(getInitializePayment.fulfilled,(state,action) => {
        state.isLoading = false
      })
  },
});

export const { productReset } = productSlice.actions;
export default productSlice.reducer;
