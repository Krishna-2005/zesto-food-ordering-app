import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_ITEM_URL } from "../utils/constants.js";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, imageId } = item.card.info;

  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-xl p-4 my-3 hover:shadow-lg transition relative">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <img
          src={CDN_ITEM_URL + imageId}
          alt={name}
          className="w-20 h-20 object-cover rounded-lg border border-gray-200"
        />
        <div className="text-left">
          <h2 className="font-semibold text-lg text-gray-800">{name}</h2>
          <p className="text-gray-500 text-sm">
            ₹
            {item?.card?.info?.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </p>
        </div>
      </div>

      {/* ✅ Bigger, Centered Quantity Controls */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 flex items-center bg-white rounded-lg shadow-md scale-110">
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
