import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('')
  const [city, setCity] = useState('Lisbon')

  function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim()) return
    onSearch(input.trim())
    setInput('')
  }

  return (
    <section className="max-w-[900px] mx-auto bg-[#eae6e2] text-[#444e54] mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between px-4">
            <form
                onSubmit={handleSubmit}
                id="search-form"
                className="mb-4 md:mb-0 flex gap-2 items-center"
                >
                <input
                    type="text"
                    id="search-input"
                    aria-describedby="searchCity"
                    placeholder="Search city..."
                    autoComplete="off"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-[300px] px-4 py-2 border-2 border-[#332b1d] rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#b9b559]"
                />
                <button
                    type="submit"
                    className="px-4 py-2 border-2 border-[#332b1d] rounded-md bg-[#d0cd8f] font-mono text-sm hover:bg-[#b9b559] transition-colors"
                >
                    Buscar
                </button>
            </form>
            <h1
            id="searched-city"
            className="max-w-[300px] text-[32px] font-bold flex items-center justify-center text-center city-title"
            >
            {city}
            </h1>
        </div>
    </section>
  )
}