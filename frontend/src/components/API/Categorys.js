import axios from "axios";

export default class Categorys{
    static async getAll(){
        const response = await axios.get('/api/v1/categorys')
        return response.data
    }
}