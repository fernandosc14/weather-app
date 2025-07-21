export default function CurrentWeather({ data }) {
  return (
    <section className="w-full mt-[50px]">
      <div className="max-w-[900px] mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-14 md:gap-32">
        <h1 className="text-[140px] font-sans text-center md:text-left">
          {data.temperature}°
        </h1>

        <div className="flex flex-col items-center justify-center text-center md:text-left md:items-start space-y-1">
          <p className="text-[15px] font-mono">{data.time}</p>
          <h2 className="text-[48px] font-sans -mt-1">{data.day}</h2>
          <p className="text-[15px] font-mono">{data.weatherType}</p>
        </div>

        <div className="flex items-center justify-center md:justify-start w-full md:w-auto mt-4 md:mt-0">
          <ul className="text-[15px] font-mono list-none text-right md:text-left space-y-1">
            <li style={{display: 'flex', gap: '4px', alignItems: 'center'}}>Humidity: <span>{data.humidity}</span></li>
            <li style={{display: 'flex', gap: '4px', alignItems: 'center'}}>Wind: <span style={{whiteSpace: 'nowrap'}}>{data.wind}</span></li>
          </ul>
        </div>
      </div>

      <hr className="max-w-[850px] mx-auto my-12 border border-[#686d80]" />
    </section>
  )
}