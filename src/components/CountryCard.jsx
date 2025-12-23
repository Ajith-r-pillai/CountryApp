
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const CountryCard = ({ country }) => {
  const { toggleFavorite, favorites } = useFavorites();
  const isFav = favorites.some((c) => c.cca2 === country.cca2);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 dark:border-gray-700">
  
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={country.flags.png}
          loading="lazy"
          alt={`${country.name.common} flag`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
       
        <div className="absolute top-3 right-3">
          <button
            onClick={() => toggleFavorite(country)}
            className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
            aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          >
            <span className="text-2xl">
              {isFav ? "⭐" : "☆"}
            </span>
          </button>
        </div>
      </div>
      
   
      <div className="p-5">
      
        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4 truncate">
          {country.name.common}
        </h3>
        
        {/* Info List */}
        <div className="space-y-2 mb-4">
          <InfoRow 
      
            label="Capital" 
            value={country.capital?.[0] || "N/A"} 
          />
          <InfoRow 
       
            label="Region" 
            value={country.region} 
          />
          <InfoRow 
        
            label="Population" 
            value={country.population.toLocaleString()} 
          />
        </div>

        {/* Details Button */}
        <Link
          to={`/country/${country.cca2}`}
          className="block w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};


const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start text-sm">
   
    <div className="flex-1 min-w-0">
      <span className="font-semibold text-gray-700 dark:text-gray-300">
        {label}:
      </span>
      <span className="ml-1 text-gray-600 dark:text-gray-400 truncate">
        {value}
      </span>
    </div>
  </div>
);

export default CountryCard;