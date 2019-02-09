import React from 'react';

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

import getWeather from './api'



class App extends React.Component {

  fetchWeather = (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    getWeather(city, country)
    .then(res => {
      console.log("fetchWeather res", res)
    })
  }

  render() {
    return (
      <div>
        <Titles/>
        <Form fetchWeather={this.fetchWeather}/>
        <Weather/>
      </div>
    )
  }
}

export default App;