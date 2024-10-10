import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import categoryServise from "./categoryService";

export const getCategory = createAsyncThunk(
  "/products/category/",
  async (_, thunkAPI) => {
    try {
      const response = await categoryServise.getCategory();
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

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: [],
    isloading: false,
  },
  reducers: {
    categoryReset: () => initialState,
  },
  extraReducers: (builders) => {
    builders
      .addCase(getCategory.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.isloading = false;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isloading = false;
        state.category = action.payload;
      });
  },
});

export const { categoryReset } = categorySlice.actions;
export default categorySlice.reducer;
