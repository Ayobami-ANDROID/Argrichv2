import apiClient from "../../app/axiosConfig";

const getCategory = async () =>{
    const response = await apiClient.get(`/products/category/`)
    return response.data
}

const categoryServise= {
    getCategory
}

export default categoryServise