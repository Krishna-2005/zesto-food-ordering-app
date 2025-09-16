import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice.js";
import { CDN_ITEM_URL } from "../utils/constants.js";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, imageId } = item.card.info;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-xl p-4 my-3 hover:shadow-lg transition relative">
      {/* Left Side */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <img
          src={CDN_ITEM_URL + imageId}
          alt={name}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-lg border border-gray-200"
        />
        <div className="text-left">
          <h2 className="font-semibold text-lg sm:text-xl text-gray-800">{name}</h2>
          <p className="text-gray-500 text-sm sm:text-base">
            ₹
            {item?.card?.info?.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="mt-4 sm:mt-0 flex justify-center sm:justify-end items-center bg-white rounded-lg shadow-md scale-110 sm:absolute sm:top-1/2 sm:right-6 sm:-translate-y-1/2">
        <button
          className="px-4 py-2 text-xl text-green-500 hover:bg-gray-200 rounded-l"
          onClick={() => dispatch(removeItem(id))}
        >
          −
        </button>
        <span className="px-4 py-2 text-green-600 font-bold text-lg">
          {item.quantity}
        </span>
        <button
          className="px-4 py-2 text-xl text-green-500 hover:bg-gray-200 rounded-r"
          onClick={() =>
            dispatch(addItem({ ...item, restaurantId: item.restaurantId }))
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
