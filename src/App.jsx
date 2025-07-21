import { useState, useEffect } from 'react'
import './index.css'
import SearchBar from './components/searchBar.jsx'
import CurrentWeather from './components/currentWeather.jsx'
import Forecast from './components/forecast.jsx'

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [city, setCity] = useState('London')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])

  async function handleSearch(cityName) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5&aqi=no&alerts=no`);
      const data = await response.json();
      function sanitizeText(text, max = 32) {
        if (!text) return '';
        return String(text).slice(0, max);
      }
      function sanitizeIcon(url) {
        if (typeof url !== 'string') return '';
        if (url.startsWith('//cdn.weatherapi.com/weather/64x64/')) return url;
        return '';
      }
      setCity(sanitizeText(data.location.name));
      setWeather({
        temperature: data.current.temp_c,
        time: sanitizeText(data.location.localtime.split(' ')[1], 8),
        day: sanitizeText(new Date(data.location.localtime).toLocaleDateString('en-GB', { weekday: 'long' }), 12),
        weatherType: sanitizeText(data.current.condition.text),
        humidity: `${data.current.humidity}%`,
        wind: `${data.current.wind_kph} km/h`,
      });
      const forecastData = data.forecast.forecastday.map(day => ({
        day: sanitizeText(new Date(day.date).toLocaleDateString('en-GB', { weekday: 'short' }), 8),
        icon: sanitizeIcon(day.day.condition.icon),
        weather: sanitizeText(day.day.condition.text),
        temp: `${Math.round(day.day.avgtemp_c)}°`
      }));
      setForecast(forecastData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const cleanInput = city.trim();
    if (!cleanInput) return;
    if (!/^[a-zA-ZÀ-ÿ ,'-]+$/.test(cleanInput)) return;
    handleSearch(cleanInput);
    setCity('');
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleSearch(`${latitude},${longitude}`);
        },
        () => {
          handleSearch(city);
        }
      );
    } else {
      handleSearch(city);
    }
  }, []);
  
  return (
    <main className="bg-[#eae6e2] text-[#444e54] min-h-screen py-8">
      <SearchBar onSearch={handleSearch} city={city} />
      {weather && <CurrentWeather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </main>
  )
}

export default App