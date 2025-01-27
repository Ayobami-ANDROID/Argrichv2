import apiClient from "../../app/axiosConfig";

const getProducts = async (page_size,page) => {
  const response = await apiClient.get(`products?page_size=${page_size}&page=${page}`);
  return response.data;
};

const getSingleProduct = async (id) => {
  const response = await apiClient.get(`products/${id}/`);
  return response.data;
};

const getSearchProduct = async (name,category,page_size,page) => {
  const response = await apiClient.get(`products?name=${name}&category=${category}&page_size=${page_size}&page=${page}`)
  return response.data
}

const createProductOrder = async (userData) => {
  const response = await apiClient.post(`/products/orders/`,userData)
  return response.data
}

const getProductOrder = async () => {
  const response = await apiClient.get(`/products/orders/`)
  return response.data
}

const getProductOrderById = async (id) => {
  const response = await apiClient.get(`/products/orders/{id}`)
  return response.data
}

const initializePayment = async() => {
  const response = await apiClient.post('/products/paystack-initalize-payment/')
  return response.data
}

const productService = {
  getProducts,
  getSingleProduct,
  getSearchProduct,
  createProductOrder,
  getProductOrder,
  getProductOrderById,
  initializePayment
};
export default productService;
