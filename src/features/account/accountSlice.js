import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import accountService from "./accountService";
import { toast } from "react-toastify";

export const getUserProfile = createAsyncThunk(
  "accounts/getUserprofile/",
  async (_, thunkAPI) => {
    try {
      const response = await accountService.getProfile();
      // toast.success("Success");
      return response;
    } catch (error) {
      
      if (error?.response?.data?.detail === "Authentication credentials were not provided.") {
          // toast.error(error?.response?.data?.detail)
          // window.location.replace('/login')
      }
      else {
          toast.error(error?.response?.data?.detail || 'An error Occured')
      }
      // toast.error(error.response?.data?.message || "An error occurred");
 
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const editUserProfile = createAsyncThunk(
  "accounts/editUserProfile/",
  async (userData, thunkAPI) => {
    try {
      const response = await accountService.editProfile(userData);
      // toast.success("Success");
      return response;
    } catch (error) {
   
      
      if (error?.response?.data?.detail === "Authentication credentials were not provided.") {
          toast.error(`${error?.response?.data?.detail} please log in`)
          
      }
      else {
          toast.error(error?.response?.data?.detail || 'An error Occured')
      }
      // toast.error(error.response?.data.error || "An error occurred");
      return thunkAPI.rejectWithValue(
        error.response?.data || "An error occurred"
      );
    }
  }
);

export const deleteUserProfile = createAsyncThunk(
  "accounts/deleteUserProfile/",
  async (_, thunkAPI) => {
    try {
      const response = await accountService.deleteProfile();
      // toast.success("Success");
      return response;
    } catch (error) {
     
      if (error?.response?.data?.detail === "Authentication credentials were not provided.") {
          toast.error(error?.response?.data?.detail)
          window.location.replace('/login')
      }
      else {
          toast.error(error?.response?.data?.detail || 'An error Occured')
      }
      // toast.error(error.response?.data.error || "An error occurred");
      return thunkAPI.rejectWithValue(
        error.response?.data || "An error occurred"
      );
    }
  }
);

export const changePassword = createAsyncThunk(
  "accounts/changePassword/",
  async (passwordData, thunkAPI) => {
    try {
      const response = await accountService.changePasswordService(passwordData);
      // toast.success("Success");
      return response;
    } catch (error) {
  
      // toast.error(error.response?.data.error || "An error occurred");
      if (error?.response?.data?.detail === "Authentication credentials were not provided.") {
        toast.error(error?.response?.data?.detail)
        window.location.replace('/login')
    }
    else {
        toast.error(error?.response?.data?.detail || 'An error Occured')
    }
      return thunkAPI.rejectWithValue(
        error.response?.data || "An error occurred"
      );
    }
  }
);



const authSlice = createSlice({
  name: "account",
  initialState: {
    user: {},
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
      
        state.user = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(editUserProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      
        
      })
      .addCase(editUserProfile.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteUserProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteUserProfile.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(changePassword.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
      });
      
  },
});

// export const { authReset, setToken } = authSlice.actions;
export default authSlice.reducer;
// deleteUserProfile