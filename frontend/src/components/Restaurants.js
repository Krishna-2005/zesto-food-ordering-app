import RestaurantCard, {
  withPromotedLabel,
} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { API_BASE } from "../utils/constants";

const Restaurants = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredRestaurants(filteredRestaurant);
  };

  const handleClear = () => {
    setfilteredRestaurants(listOfRestaurants);
    setsearchText("");
  };

  useEffect(() => {
    handleFilter();
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch("https://zesto-food-ordering-app.onrender.com/api/restaurants");

    const json = await data.json();

    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <h1 className="text-red-600 text-center text-xl sm:text-2xl mt-20 px-4">
        You are Offline...
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3 sm:gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
          <input
            className="w-full sm:w-64 border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#fd9139]"
            data-testid="searchInput"
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="w-full sm:w-auto px-4 py-2 bg-[#fd9139] text-white font-semibold rounded-lg shadow-md hover:bg-[#e57f2d] transition-transform duration-300 text-sm sm:text-base"
            onClick={() => {
              handleFilter();
            }}
          >
            Search
          </button>
          <button
            className="w-full sm:w-auto px-4 py-2 bg-[#333333] text-white font-semibold rounded-lg shadow-md hover:bg-[#1f1f1f] transition-transform duration-300 text-sm sm:text-base"
            onClick={() => {
              handleClear();
            }}
          >
            Clear
          </button>
        </div>
        <div className="w-full sm:w-auto">
          <button
            className="w-full sm:w-auto px-4 py-2 bg-[#00809D] text-white font-semibold rounded-lg shadow-md hover:bg-[#006977] transition-transform duration-300 text-sm sm:text-base"
            onClick={() => {
              setfilteredRestaurants(
                listOfRestaurants.filter((res) => res.info.avgRating > 4.5)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredRestaurants.map((Restaurant) => (
          <Link
            key={Restaurant.info.id}
            to={"/restaurants/" + Restaurant.info.id}
          >
            {Restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={Restaurant} />
            ) : (
              <RestaurantCard resData={Restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
