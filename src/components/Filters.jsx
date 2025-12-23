// const Filters = ({ setRegion, setPopulation }) => {
//   return (
//     <div className="flex flex-wrap gap-4 mt-4">
//       <select
//         onChange={(e) => setRegion(e.target.value)}
//         className="border p-2 rounded"
//       >
//         <option value="">All Regions</option>
//         <option>Asia</option>
//         <option>Europe</option>
//         <option>Africa</option>
//         <option>Americas</option>
//         <option>Oceania</option>
//       </select>

//       <select
//         onChange={(e) => setPopulation(e.target.value)}
//         className="border p-2 rounded"
//       >
//         <option value="">All Population</option>
//         <option value="low">&lt; 10M</option>
//         <option value="mid">10M – 50M</option>
//         <option value="high">&gt; 50M</option>
//       </select>
//     </div>
//   );
// };

// export default Filters;
const Filters = ({ setRegion, setPopulation }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Region Filter */}
      <div className="relative">
        <select
          onChange={(e) => setRegion(e.target.value)}
          className="appearance-none px-5 py-3 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 cursor-pointer transition-all shadow-sm hover:shadow-md"
        >
          <option value=""> All Regions</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Oceania</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 dark:text-gray-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Population Filter */}
      <div className="relative">
        <select
          onChange={(e) => setPopulation(e.target.value)}
          className="appearance-none px-5 py-3 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 cursor-pointer transition-all shadow-sm hover:shadow-md"
        >
          <option value=""> All Population</option>
          <option value="low">&lt; 10M</option>
          <option value="mid">10M – 50M</option>
          <option value="high">&gt; 50M</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 dark:text-gray-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Filters;