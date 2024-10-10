import apiClient from "../../app/axiosConfig";


const getCart = async (page_size,page) =>{
    const response = await apiClient.get(`/products/cart/?page_size=${page_size}&page=${page}`)
    return response.data
}


const postCart = async (userData) =>{
    const response = await apiClient.post(`/products/cart/`,userData)
    return response.data
}

const putCart = async (id,userData) => {
    const response = await apiClient.patch(`/products/cart/${id}/`,userData)
    return response.data
}

const deleteCart = async(id) => {
    const response = await apiClient.delete(`/products/cart/${id}/`)
    return response.data
}


const cartService= {
    getCart,
    postCart,
    putCart,
    deleteCart
}

export default cartService