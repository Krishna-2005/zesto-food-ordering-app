import { useParams, Link } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import ShimmerAccordion from "./ShimmerAccordion";
import { CDN_URL } from "../utils/constants";
import { ArrowLeft } from "lucide-react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  console.log(resInfo);

  if (resInfo === null) {
    return <ShimmerAccordion />;
  }

  // ✅ Extract restaurant info
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* ✅ Highlighted Restaurant Header */}
      <div className="flex items-center gap-4 mb-6 bg-white shadow-md border-l-4 border-orange-500 rounded-xl p-4">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div className="text-left">
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="font-medium text-gray-600">
            {cuisines.join(", ")} • {costForTwoMessage}
          </p>
        </div>
      </div>

      {/* Categories */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={index}
          resId={resId}
          resInfo={{ name, cloudinaryImageId }}
          data={category?.card?.card}
          showIndex={index === showIndex}
          setShowIndex={() =>
            index === showIndex ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
