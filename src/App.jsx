import { useState } from 'react'
import './index.css'
import SearchBar from './components/searchBar.jsx'
import CurrentWeather from './components/currentWeather.jsx'
import Forecast from './components/forecast.jsx'

function App() {
  const [city, setCity] = useState('Lisbon')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const exampleWeather = {
    temperature: 4,
    time: '11:00',
    day: 'Today',
    weatherType: 'Cloudy',
    humidity: '80%',
    wind: '10 km/h',
  }

  const exampleForecast = [
    { day: 'Fri', icon: '🌧️', weather: 'Rain', temp: '2°' },
    { day: 'Sat', icon: '☁️', weather: 'Cloudy', temp: '4°' },
    { day: 'Sun', icon: '⛅', weather: 'Partly cloudy', temp: '6°' },
    { day: 'Mon', icon: '☀️', weather: 'Sunny', temp: '8°' },
    { day: 'Tue', icon: '💨', weather: 'Windy', temp: '5°' },
  ]

  function handleSearch(cityName) {
    setCity(cityName)
    setWeather(exampleWeather)
    setForecast(exampleForecast)
    // Fetch API
  }

  return (
    <main className="mt-[30px]">
      <SearchBar onSearch={handleSearch} />
      {weather && <CurrentWeather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </main>
  )
}

export default App