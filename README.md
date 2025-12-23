# Country Explorer Dashboard

A responsive React application to explore countries, view weather information, and manage favorite countries. Built with **React**, **Tailwind CSS v4**, and **Vite**.

---

## Features

### Core Features
- **Country Listing**
  - Fetch all countries from [REST Countries API](https://restcountries.com/v3.1/all)
  - Display flag, name, capital, region, and population
  - Virtualized grid for performance
- **Search & Filter**
  - Search countries by name
  - Filter by region (Asia, Europe, Africa, Americas, Oceania)
  - Filter by population range (<10M, 10M–50M, >50M)
- **Country Details**
  - Detailed view for each country
  - Flag, name, capital, region & sub-region, population, languages, currencies, time zones
- **Weather Integration**
  - Fetch current weather for capital city via [OpenWeatherMap API](https://openweathermap.org/api)
  - Show temperature, weather condition, humidity, wind speed
- **Favorites**
  - Mark/unmark countries as favorites
  - Persist favorites using LocalStorage
  - Separate favorites view

### Bonus / Advanced Features

- Skeleton loaders
- API caching
- Responsive UI for mobile & desktop
- Dbounced search input
---

## Tech Stack

- **Frontend:** React (Hooks), Tailwind CSS v4, Vite
- **Routing:** React Router
- **State Management:** Context API (Favorites)
- **HTTP Requests:** Axios
- **Virtualization:** react-window

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/country-explorer-dashboard.git
cd country-explorer-dashboard
Install dependencies

bash
Copy code
npm install
Configure environment variables

Create a .env file in the project root:

ini
Copy code
VITE_WEATHER_API_KEY=your_openweathermap_api_key
Run the development server

bash
Copy code
npm run dev
Open in your browser at http://localhost:5173 (Vite default port)

API Key Configuration
Sign up for a free API key at OpenWeatherMap

Add your key to .env as VITE_WEATHER_API_KEY

The app uses this key to fetch weather data for the capital cities

Available Scripts
npm run dev — Start development server

npm run build — Build production bundle

npm run preview — Preview production build locally
