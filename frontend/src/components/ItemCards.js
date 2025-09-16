import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";
import { CDN_ITEM_URL } from "../utils/constants";
import Swal from "sweetalert2";

const ItemCards = ({ items, restaurantId, resInfo }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const currentRestaurantId = useSelector((store) => store.cart.restaurantId);

  const handleAddItem = async (item) => {
    if (currentRestaurantId && currentRestaurantId !== restaurantId) {
      const result = await Swal.fire({
        title: "Replace items in cart?",
        text: "Your cart already has items from another restaurant.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, clear it",
        cancelButtonText: "No, keep my cart",
        confirmButtonColor: "#f97316",
      });

      if (!result.isConfirmed) return;
      dispatch(clearCart());
    }

    dispatch(addItem({ ...item, restaurantId, resInfo }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const getQuantity = (id) => {
    const found = cartItems.find((cartItem) => cartItem.card.info.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const id = item?.card?.info?.id;
        const qty = getQuantity(id);

        return (
          <div
            key={id}
            className="flex flex-col sm:flex-row justify-between items-start bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition relative"
          >
            {/* Left Section: Dish Info */}
            <div className="flex-1">
              <h3 className="text-gray-900 font-semibold text-base sm:text-lg">
                {item?.card?.info?.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                {item.card.info.description}
              </p>
              <p className="text-gray-800 font-medium mt-2">
                ₹
                {item?.card?.info?.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
            </div>

            {/* Right Section: Image + ADD / Quantity */}
            <div className="flex-shrink-0 relative mt-3 sm:mt-0 sm:ml-4 w-full sm:w-28">
              <img
                src={CDN_ITEM_URL + item.card.info.imageId}
                alt={item?.card?.info?.name}
                className="w-full h-24 sm:h-28 object-cover rounded-lg"
              />

{/* Buttons */}
{qty === 0 ? (
  <button
    onClick={() => handleAddItem(item)}
    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-green-500 font-bold px-4 py-2 shadow-md hover:bg-gray-100 transition text-sm sm:text-base rounded-md"
  >
    ADD
  </button>
) : (
  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-md shadow-md flex items-center">
    <button
      onClick={() => handleRemoveItem(id)}
      className="px-3 py-2 text-green-500 font-bold hover:bg-gray-100 transition rounded-l-md flex items-center justify-center"
    >
      -
    </button>
    <span className="px-4 py-2 text-green-600 font-bold flex items-center justify-center">
      {qty}
    </span>
    <button
      onClick={() => handleAddItem(item)}
      className="px-3 py-2 text-green-500 font-bold hover:bg-gray-100 transition rounded-r-md flex items-center justify-center"
    >
      +
    </button>
  </div>
)}



            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCards;
