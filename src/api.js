
import axios from 'axios';


const getWeather = () => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: `London,uk`,
        appid: process.env.REACT_APP_WEATHER_API_KEY
      }
    })
    .then(res => res.data)
  }

export default getWeather