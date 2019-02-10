
import axios from 'axios';


const getWeather = (city,country) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city + "," + country,
        appid: process.env.REACT_APP_WEATHER_API_KEY,
        units: "metric"
      }
    })
    .then(res => res.data)
  }

export default getWeather