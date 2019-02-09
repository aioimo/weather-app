import React from 'react';

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

import getWeather from './api'



class App extends React.Component {

  componentDidMount() {
    getWeather()
    .then(res => {
      console.log("res", res)
    })
  }

  render() {
    return (
      <div>
        <Titles/>
        <Form/>
        <Weather/>
      </div>
    )
  }
}

export default App;