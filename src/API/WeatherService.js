import axios from "axios";

export default class WeatherService {
    static async getAll(){
        const response = await axios.get('https://vik-bb.ru/api/weather')
        return response.data.data;
    }
}