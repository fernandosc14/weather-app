export default function CurrentWeather({ data }) {
  return (
    <section className="current-weather mt-[50px]">
      <div className="container mx-auto">
        <div className="flex flex-row items-stretch gap-4">
          <h1 className="text-[140px] font-sans text-center" id="current-temperature">
            {data.temperature}°
          </h1>
          <div className="flex-1 todays-info flex flex-col items-center justify-center">
            <p id="current-time" className="text-lg">{data.time}</p>
            <h2 id="current-day" className="text-2xl font-semibold">{data.day}</h2>
            <p id="weather-type" className="italic">{data.weatherType}</p>
          </div>
          <div className="flex-1 side-info flex items-center justify-center">
            <ul>
              <li>Humidity: <span id="humidity">{data.humidity}</span></li>
              <li>Wind: <span id="wind">{data.wind}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="max-w-[800px] m-12 border border-[#686d80]" />
    </section>
  )
}