import { useEffect, useState, useCallback } from "react";
import { fetchCountries } from "../services/api";
import CountryCard from "../components/CountryCard";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import SkeletonCard from "../components/SkeletonCard";

// Simple debounce function
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(20);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [region, setRegion] = useState("");
  const [population, setPopulation] = useState("");

  // Async fetch handler
  const loadCountries = async () => {
    setLoading(true);
    try {
      const data = await fetchCountries();
      setCountries(data);
    } catch (err) {
      console.error("Error fetching countries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  // Debounce search input
  const handleSearchDebounced = useCallback(
    debounce((value) => setDebouncedSearch(value), 500),
    []
  );

  useEffect(() => {
    handleSearchDebounced(search);
  }, [search, handleSearchDebounced]);

  const filtered = countries.filter((c) => {
    if (debouncedSearch && !c.name.common.toLowerCase().includes(debouncedSearch.toLowerCase()))
      return false;
    if (region && c.region !== region) return false;
    if (population === "low" && c.population >= 10_000_000) return false;
    if (population === "mid" && (c.population < 10_000_000 || c.population > 50_000_000)) return false;
    if (population === "high" && c.population <= 50_000_000) return false;
    return true;
  });

  const items = filtered.slice(0, visibleCount);
  const loadMore = () => setVisibleCount((prev) => prev + 20);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
        <div className="space-y-6 mb-8">
          <SearchBar value={search} onChange={setSearch} />
          <Filters setRegion={setRegion} setPopulation={setPopulation} />
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((c) => (
                <CountryCard key={c.cca2} country={c} />
              ))}
            </div>

            {items.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  No countries found matching your criteria
                </p>
              </div>
            )}

            {visibleCount < filtered.length && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={loadMore}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Load More Countries
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CountryList;
