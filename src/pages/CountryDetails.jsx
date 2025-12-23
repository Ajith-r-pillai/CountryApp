import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCountries, fetchWeather } from "../services/api";

const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchCountries().then((data) => {
      const found = data.find((c) => c.cca2 === code);
      setCountry(found);
      if (found?.capital)
        fetchWeather(found.capital[0]).then(setWeather);
    });
  }, [code]);

  if (!country) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading country details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
        {/* Country Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
     
          <div className="relative h-64 md:h-80 bg-gray-200 dark:bg-gray-700">
            <img 
              src={country.flags.svg} 
              alt={`${country.name.common} flag`}
              className="w-full h-full object-contain p-8"
            />
          </div>

          {/* Content Section */}
          <div className="p-8">
          
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {country.name.common}
            </h1>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <InfoItem 
                  label="Official Name" 
                  value={country.name?.official || "N/A"} 
                />
                <InfoItem 
                  label="Capital" 
                  value={country.capital?.[0] || "N/A"} 
                />
                <InfoItem 
                  label="Region" 
                  value={country.region || "N/A"} 
                />
                <InfoItem 
                  label="Subregion" 
                  value={country.subregion || "N/A"} 
                />
              </div>
              
              <div className="space-y-4">
                <InfoItem 
                  label="Population" 
                  value={country.population ? country.population.toLocaleString() : "N/A"} 
                />
                <InfoItem 
                  label="Area" 
                  value={country.area ? `${country.area.toLocaleString()} km²` : "N/A"} 
                />
                <InfoItem 
                  label="Languages" 
                  value={country.languages ? Object.values(country.languages).join(", ") : "N/A"} 
                />
                <InfoItem 
                  label="Currencies" 
                  value={country.currencies ? Object.values(country.currencies).map(c => c.name).join(", ") : "N/A"} 
                />
              </div>
            </div>

            {/* Weather Section */}
            {weather && weather.main && (
    <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-700 rounded-lg border border-blue-100 dark:border-gray-600">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="mr-2">🌤️</span> Weather in {country.capital?.[0]}
                </h2>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-3xl mb-2">🌡️</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {weather.main.temp}°C
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Temperature</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-3xl mb-2">💨</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {weather.wind.speed} m/s
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Wind Speed</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-3xl mb-2">💧</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {weather.main.humidity}%
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Humidity</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
      {label}
    </p>
    <p className="text-lg text-gray-900 dark:text-white">
      {value}
    </p>
  </div>
);

export default CountryDetails;