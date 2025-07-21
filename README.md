# Meteo Weather App

![Preview do App](https://github.com/user-attachments/assets/86c16755-509f-4eba-95d4-6c556dfe7899)

A modern weather forecast web application built with React and Vite, featuring real-time data from WeatherAPI, autocomplete city search, and a clean, responsive UI.

## Features

- Current weather and 5-day forecast for any city
- Autocomplete city search with suggestions
- Automatic location detection on page load
- Secure API key management via environment variables
- Input validation and data sanitization
- Debounced API requests for performance
- Responsive and accessible design

## Technologies Used

- React
- Vite
- Tailwind CSS
- WeatherAPI (https://www.weatherapi.com/)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/fernandosc14/weather-app.git
   cd weather-app
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Create a `.env` file in the project root with your WeatherAPI key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
   You can get a free API key at [WeatherAPI](https://www.weatherapi.com/).

### Running the App
```sh
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` (default Vite port).

## Usage
- On page load, the app detects your location and shows the weather for your city.
- Use the search bar to find weather for any city. Autocomplete suggestions help you select the correct location.
- The current weather and 5-day forecast are displayed with icons and details.

## Security & Best Practices
- API key is stored in `.env` and never exposed in the codebase.
- All user inputs are validated and sanitized.
- Data from the API is sanitized before rendering.
- All API requests use HTTPS.
- Autocomplete requests are debounced to prevent abuse.

## Project Structure
```
meteo/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── currentWeather.jsx
│   │   ├── forecast.jsx
│   │   └── searchBar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
├── README.md
└── ...
```

## Customization
- You can change the default city in `App.jsx` (`useState('London')`).
- To use another weather API, update the fetch logic and environment variables.
- Tailwind CSS can be customized via `tailwind.config.js`.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

## Credits
- Weather data powered by [WeatherAPI](https://www.weatherapi.com/)
- Icons and UI inspired by modern weather apps

---

For any questions or support, contact [Fernando](mailto:your-email@example.com).
