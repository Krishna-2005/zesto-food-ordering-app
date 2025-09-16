const ShimmerMenu = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto animate-pulse">
        {/* Restaurant Header */}
        <div className="mb-8">
          <div className="h-8 w-48 bg-gray-300 rounded mb-4"></div>
          <div className="h-6 w-80 bg-gray-200 rounded"></div>
        </div>

        {/* Category Blocks */}
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 mb-6"
          >
            {/* Category Title */}
            <div className="flex justify-between items-center mb-6">
              <div className="h-7 w-56 bg-gray-300 rounded"></div>
              <div className="h-7 w-7 bg-gray-200 rounded-full"></div>
            </div>

            {/* Expanded Placeholder Content */}
            <div className="space-y-4">
              <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
              <div className="h-5 w-2/3 bg-gray-200 rounded"></div>
              <div className="h-5 w-1/2 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;
