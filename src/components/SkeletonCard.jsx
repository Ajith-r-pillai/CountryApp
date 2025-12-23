
const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
    <div className="animate-pulse">
      {/* Flag Skeleton */}
      <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
      
      {/* Content Skeleton */}
      <div className="p-5 space-y-4">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-3/4"></div>
        
        {/* Info Skeletons */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/5"></div>
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="pt-2">
          <div className="h-11 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
);

export default SkeletonCard;