import axios from "axios";

export default class Orders{
    static async sendOrder(data){
        const response = await axios.post('/api/v1/sendOrder', data)
        return response.data
    }
}