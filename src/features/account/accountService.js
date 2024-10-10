import apiClient from "../../app/axiosConfig";

const getProfile = async (userData) => {
  const response = await apiClient.get("accounts/edit/");
  return response.data;
};

const editProfile = async (userData) => {
  const response = await apiClient.patchForm("accounts/edit/", userData);
  return response.data;
};

const deleteProfile = async () => {
  const response = await apiClient.delete("accounts/edit/");
  return response.data;
};

const changePasswordService = async (passwordData) => {
  const response = await apiClient.put("accounts/change-password/",passwordData);
  return response.data;
};

const accountService = {
  getProfile,
  editProfile,
  deleteProfile,
  changePasswordService,
};

export default accountService;
