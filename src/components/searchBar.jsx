import { useState } from 'react'
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export default function SearchBar({ onSearch, city }) {
  const [input, setInput] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  let debounceTimeout
  function fetchSuggestions(query) {
    clearTimeout(debounceTimeout)
    if (!query.trim()) {
      setSuggestions([])
      return
    }
    debounceTimeout = setTimeout(async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}`)
        const data = await response.json()
        setSuggestions(data)
      } catch {
        setSuggestions([])
      }
    }, 400)
  }

  function handleInputChange(e) {
    const value = e.target.value
    setInput(value)
    setShowSuggestions(true)
    fetchSuggestions(value)
  }

  function handleSuggestionClick(suggestion) {
    onSearch(`${suggestion.name}, ${suggestion.country}`)
    setInput('')
    setSuggestions([])
    setShowSuggestions(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim()) return
    onSearch(input.trim())
    setInput('')
    setSuggestions([])
    setShowSuggestions(false)
  }

  return (
    <section className="w-full">
      <div className="max-w-[900px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative">
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 w-full md:w-auto mb-4 md:mb-0"
        >
          <div className="relative w-full md:w-[300px]">
            <input
              type="text"
              placeholder="Search city..."
              value={input}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-2 border-[#332b1d] rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#b9b559]"
              autoComplete="off"
            />
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white border border-[#332b1d] rounded-md shadow-lg z-10 mt-1 max-h-60 overflow-y-auto">
                {suggestions.map((s) => (
                  <li
                    key={s.id}
                    className="px-4 py-2 cursor-pointer hover:bg-[#eae6e2] text-left"
                    onClick={() => handleSuggestionClick(s)}
                  >
                    {s.name}, {s.region}, {s.country}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2 border-2 border-[#332b1d] rounded-md bg-[#d0cd8f] font-mono text-sm hover:bg-[#b9b559] transition-colors"
          >
            Search
          </button>
        </form>
        <h1 className="text-[32px] font-bold text-center">{city}</h1>
      </div>
    </section>
  )
}