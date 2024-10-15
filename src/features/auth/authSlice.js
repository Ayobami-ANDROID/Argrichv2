import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import authService from "./authService";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";




export const register = createAsyncThunk(
  "accounts/signup/",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.register(userData);
      toast.success("Registration successful!");
  
      return response;
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
      console.log(error);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const login = createAsyncThunk(
  "accounts/login/",
  async (userData, thunkAPI) => {
    secureLocalStorage.clear();
    try {
      const response = await authService.login(userData);
      return response;
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response?.data.error || "An error occurred");
      return thunkAPI.rejectWithValue(
        error.response?.data || "An error occurred"
      );
    }
  }
);

export const requestPasswordChange = createAsyncThunk(
  "accounts/reset/",
  async (userData, thunkAPI) => {

    try {
      const response = await authService.requestPasswordChange(userData);
      return response;
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response?.data.error || "An error occurred");
      return thunkAPI.rejectWithValue(
        error.response?.data || "An error occurred"
      );
    }
  }
);

export const confirmOTP = createAsyncThunk(
  "accounts/confirm-otp/",
  async (userData, thunkAPI) => {
  
    try {
      const response = await authService.confirmOTP(userData);
      return response;
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response?.data.error || "An error occurred");
      return thunkAPI.rejectWithValue(
        error.response?.data || "An error occurred"
      );
    }
  }
);
export const changePassword = createAsyncThunk(
  "accounts/changePassword/",
  async (userData, thunkAPI) => {

    try {
      const response = await authService.requestPasswordConfirm(userData);
      return response;
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response?.data.error || "An error occurred");
      return thunkAPI.rejectWithValue(
        error.response?.data || "An error occurred"
      );
    }
  }
);


export const accountVerify = createAsyncThunk(
  "/accounts/otp/",
  async (userData, thunkAPI) => {

    try {
      const response = await authService.accountVerify(userData);
      return response;
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response?.data.error || "An error occurred");
      return thunkAPI.rejectWithValue(
        error.response?.data || "An error occurred"
      );
    }
  }
)

export const resendotp = createAsyncThunk(
  "resend-otp",
  async(userData,thunkAPI) => {
    try {
      const response = await authService.resendOtp(userData)
      return response
    } catch (error) {
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
)


export const feedBack = createAsyncThunk(
  "feedback",
  async(userData,thunkAPI) => {
    try {
      const response = await authService.feedback(userData)
      return response
    } catch (error) {
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
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: secureLocalStorage.getItem("user") || "",
    token: secureLocalStorage.getItem("token") || "",
    isLoading: false,
  },
  reducers: {
    authReset: (state) => {
      state.user = null;
      state.token = "";
      state.isLoading = false;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      secureLocalStorage.setItem("token", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("action.payload", action.payload);
        state.user = action.payload.user;
        state.token = action.payload.tokens;
        console.log("action.payload.tokens", action.payload.tokens);
        secureLocalStorage.setItem("token", action.payload.tokens);
        secureLocalStorage.setItem("user", action.payload.user);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(requestPasswordChange.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(requestPasswordChange.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(requestPasswordChange.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(confirmOTP.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(confirmOTP.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(confirmOTP.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(accountVerify.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(accountVerify.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(accountVerify.rejected, (state, action) => {
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
      })
      .addCase(resendotp.rejected,(state,action)=> {
        state.isLoading = false;
      })
      .addCase(resendotp.pending,(state,action) => {
        state.isLoading = true
      } )
      .addCase(resendotp.fulfilled,(state,action) => {
        state.isLoading = true
      })
      .addCase(feedBack.pending,(state,action)=>{
        state.isLoading = true;
      })
      .addCase(feedBack.rejected,(state,action) => {
        state.isLoading = false
      })
      .addCase(feedBack.fulfilled,(state,action) => {
        state.isLoading = false
      })
  },
});

export const { authReset, setToken } = authSlice.actions;
export default authSlice.reducer;
