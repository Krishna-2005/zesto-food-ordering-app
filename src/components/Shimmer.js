const Shimmer = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Top Search + Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="h-10 w-60 bg-gray-200 rounded shimmer"></div>
          <div className="h-10 w-24 bg-gray-200 rounded shimmer"></div>
        </div>
        <div>
          <div className="h-10 w-40 bg-gray-200 rounded shimmer"></div>
        </div>
      </div>

      {/* Shimmer Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="w-[250px] h-[350px] bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-3"
            >
              {/* Image placeholder */}
              <div className="h-40 w-full bg-gray-200 rounded-xl shimmer"></div>

              {/* Text placeholders */}
              <div className="h-5 w-3/4 bg-gray-200 rounded shimmer"></div>
              <div className="h-4 w-full bg-gray-200 rounded shimmer"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded shimmer"></div>

              {/* Bottom stats */}
              <div className="flex justify-between mt-auto">
                <div className="h-4 w-12 bg-gray-200 rounded shimmer"></div>
                <div className="h-4 w-16 bg-gray-200 rounded shimmer"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
