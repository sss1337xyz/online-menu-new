import axios from "axios";

export default class Products{
    static async getAll(){
        const response = await axios.get('/api/v1/products')
        return response.data
    }

    static async getByCategorySlug(slug){
        const response = await axios.get('/api/v1/products?category__slug=' + slug)
        return response.data
    }


    static async getByProductSlug(slug){
        const response = await axios.get('/api/v1/products?slug=' + slug)
        return response.data[0]
    }
}