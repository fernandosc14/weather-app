export default function Forecast({ data }) {
  return (
    <section className="container mt-8">
      <div className="flex justify-between max-w-md mx-auto">
        {data.map(({ day, icon, weather, temp }) => (
          <div key={day} className="text-center">
            <h4 className="font-semibold">{day}</h4>
            <div className="text-4xl my-2">{icon}</div>
            <p className="text-sm">{weather}</p>
            <span className="font-bold">{temp}</span>
          </div>
        ))}
      </div>
    </section>
  )
}