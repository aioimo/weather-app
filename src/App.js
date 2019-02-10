import React from 'react';

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

import getWeather from './api'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      error: undefined
    }
  }

  fetchWeather = (e) => {
    e.preventDefault()
    console.log(e)
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    getWeather(city, country)
    .then(res => {
      this.setState({
        temperature: res.main.temp,
        city: res.name,
        country: res.sys.country,
        humidity: res.main.humidity,
        description: res.weather[0].description,
        error: null
      })
    })
    .catch(err => {
      this.setState({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        error: "Enter a valid city and country."
      })
    })
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container"> 
              <div className="row">
  
                <div className="col-5 title-container">
                  <Titles/>
                </div>

                <div className="col-7 form-container">
                  <Form fetchWeather={this.fetchWeather}/>
                  <Weather 
                    temperature={this.state.temperature}
                    country={this.state.country}
                    city={this.state.city}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                    />
                </div>
              
              </div>
            </div>
          </div>  
        </div>


      </div>
    )
  }
}

export default App;