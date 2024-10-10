import apiClient from "../../app/axiosConfig";

const register = async (userData) => {
  const response = await apiClient.post("accounts/signup/", userData);
  return response.data;
};

const login = async (userData) => {
  const response = await apiClient.post("accounts/login/", userData);
  return response.data;
};


const requestPasswordChange = async (userData) => {
  const response = await apiClient.post("accounts/request-reset-password/", userData);
  return response.data;
};

const confirmOTP = async (userData) => {
  const response = await apiClient.post("accounts/reset-password-verify/", userData);
  return response.data;
};
const requestPasswordConfirm = async (userData) => {
  const response = await apiClient.post("accounts/reset-password-confirm/", userData);
  return response.data;
};

const accountVerify = async(userData) => {
  const response = await apiClient.post("accounts/verify-email/",userData);
  return response.data
}

const authService = {
  login,
  confirmOTP,
  register,
  requestPasswordChange,
  requestPasswordConfirm,
  accountVerify
};

export default authService;
