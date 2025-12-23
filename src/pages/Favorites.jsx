import CountryCard from "../components/CountryCard";
import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {favorites.length === 0 ? (
        // ❌ No favorites view
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              No Favorite Countries Yet
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Start exploring and add countries to your favorites!
            </p>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              Explore Countries
            </a>
          </div>
        </div>
      ) : (
        // ✅ Favorites list view
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              Favorite Countries
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              You have {favorites.length}{" "}
              {favorites.length === 1 ? "favorite" : "favorites"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((country) => (
              <CountryCard key={country.cca2} country={country} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
