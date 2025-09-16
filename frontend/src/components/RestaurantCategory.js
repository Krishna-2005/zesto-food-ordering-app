import { useState } from "react";
import ItemCards from "./ItemCards";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Using react-icons

const RestaurantCategory = ({ data, showIndex, setShowIndex, resId, resInfo}) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 my-4 transition-all duration-300 overflow-hidden">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-gray-600 text-xl">
          {showIndex ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {/* Accordion Content */}
      {showIndex && (
        <div className="mt-4">
          <ItemCards items={data.itemCards} restaurantId={resId} resInfo={resInfo}/>
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
