import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";
import { CDN_ITEM_URL } from "../utils/constants";
import Swal from "sweetalert2";

const ItemCards = ({ items, restaurantId, resInfo }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const currentRestaurantId = useSelector((store) => store.cart.restaurantId);

  const handleAddItem = async (item) => {
    // Check if cart already has items from a different restaurant
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

      if (!result.isConfirmed) {
        return; // User cancelled
      }

      // Clear cart before adding
      dispatch(clearCart());
    }

    // Add new item with restaurant info
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
    <div>
      {items.map((item) => {
        const id = item?.card?.info?.id;
        const qty = getQuantity(id);

        return (
          <div
            key={id}
            className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
          >
            {/* Text Section */}
            <div className="w-6/12 flex flex-col justify-between">
              <div className="py-2">
                <span className="font-semibold text-gray-800">
                  {item?.card?.info?.name}
                </span>
                <span className="ml-1 text-gray-700">
                  - ₹
                  {item?.card?.info?.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                {item.card.info.description}
              </p>
            </div>

            {/* Image + Button Section */}
            <div className="w-2/12 relative flex flex-col items-center">
              <img
                src={CDN_ITEM_URL + item.card.info.imageId}
                className="w-full h-24 object-cover rounded-lg"
                alt={item?.card?.info?.name}
              />

              {qty === 0 ? (
                <button
                  className="absolute -bottom-2 bg-white text-green-500 font-bold px-3 py-1 rounded-md shadow-md hover:bg-gray-200 transition duration-300"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              ) : (
                <div className="absolute -bottom-2 flex items-center bg-white rounded-md shadow-md">
                  <button
                    className="px-3 py-1 text-lg text-green-500 hover:bg-gray-200 rounded-l"
                    onClick={() => handleRemoveItem(id)}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-green-600 font-bold">
                    {qty}
                  </span>
                  <button
                    className="px-3 py-1 text-lg text-green-500 hover:bg-gray-200 rounded-r"
                    onClick={() => handleAddItem(item)}
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
