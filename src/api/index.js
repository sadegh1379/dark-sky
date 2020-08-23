import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '00827bf858a9c36ddfdc4081cf66cf82'


export const fetchWeather = async (city)=>{
    const {data} = await axios.get(URL , {
        params : {
            q : city,
            units:'metric',
            APPID : API_KEY
        }
    })

    return data;
}