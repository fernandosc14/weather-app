export default function Forecast({ data }) {
  return (
    <section className="w-full mt-8">
      <div className="max-w-[900px] mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {data.map(({ day, icon, weather, temp }) => (
            <div
              key={day}
              className="text-center font-sans text-sm space-y-1"
            >
              <h4 className="text-[22px] font-semibold mb-3">{day}</h4>
              <img src={`https:${icon}`} alt={weather} className="mx-auto h-12 w-12" />
              <p className="text-[14px]">{weather}</p>
              <span className="text-[20px] font-bold">{temp}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}