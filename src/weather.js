import React from 'react'
import { Text } from 'spectacle'

class Weather extends React.Component {
  state = {
    date: '',
    min: 0,
    max: 0,
    loading: true
  }

  componentDidMount() {
    this.getWeather()
  }

  getWeather = async () => {
    const openData = await fetch(
      'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/07040?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4bGFzdHRyYWluaG9tZXhAZ21haWwuY29tIiwianRpIjoiMDhjOTllMzgtMGY2ZC00NmZhLWEwOWItYzA1MzdkMTljNmI1IiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1NjkxODUyNTgsInVzZXJJZCI6IjA4Yzk5ZTM4LTBmNmQtNDZmYS1hMDliLWMwNTM3ZDE5YzZiNSIsInJvbGUiOiIifQ.gE37OqwcBk3daUxXJ2VRn9ocUyul_47jxz8VAvFXimg'
    ).then(rs => rs.json())
    if (!openData || !openData.datos) {
      return
    }
    const structuredData = await fetch(openData.datos).then(rs => rs.json())
    if (!structuredData.length) {
      return
    }
    const prediction = structuredData.pop()
    const today = prediction.prediccion.dia[0]
    this.setState({
      date: today.fecha,
      min: today.temperatura.minima,
      max: today.temperatura.maxima,
      loading: false
    })
  }

  render() {
    const { date, min, max, loading } = this.state
    if (loading) {
      return (
        <Text textColor="primary" lineHeight={2}>
          Loading weather... 🕵🏽‍♀️
        </Text>
      )
    }
    return (
      <div>
        <Text textColor="primary" lineHeight={2}>
          🌤 {min} - {max}℃
        </Text>
        <Text textSize={18} textColor="primary" caps lineHeight={2}>
          Date {date}
        </Text>
      </div>
    )
  }
}

export default Weather
