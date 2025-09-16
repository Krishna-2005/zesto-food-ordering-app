import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const restaurant = useSelector((store) => store.cart.restaurantInfo);
  const dispatch = useDispatch();

  const [showBill, setShowBill] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(null);

  const itemTotal = cartItems.reduce(
    (sum, item) =>
      sum +
      ((item?.card?.info?.price ?? item.card.info.defaultPrice) / 100) *
        item.quantity,
    0
  );

  const gstPercent = 5;
  const gstAmount = (itemTotal * gstPercent) / 100;
  const finalAmount = itemTotal + gstAmount;

  const handlePayment = () => {
    const orderDetails = {
      restaurant,
      items: [...cartItems],
      subtotal: itemTotal,
      gst: gstAmount,
      total: finalAmount,
      date: new Date().toLocaleString(),
    };
    setOrderPlaced(orderDetails);
    setShowBill(false);
    setShowAlert(true);
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {/* Order Placed */}
      {orderPlaced ? (
        <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            🎉 Order Placed Successfully!
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Ordered on {orderPlaced.date}
          </p>

          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-700">
            {orderPlaced.restaurant?.name}
          </h3>
          <div className="divide-y divide-gray-200 mb-4">
            {orderPlaced.items.map((item) => (
              <div
                key={item.card.info.id}
                className="flex justify-between py-2 text-gray-600"
              >
                <span>
                  {item.card.info.name} × {item.quantity}
                </span>
                <span>
                  ₹
                  {(
                    ((item.card.info.price ?? item.card.info.defaultPrice) /
                      100) *
                    item.quantity
                  ).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{orderPlaced.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (5%)</span>
              <span>₹{orderPlaced.gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-xl border-t border-gray-300 pt-2">
              <span>Total</span>
              <span>₹{orderPlaced.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Restaurant Info */}
          {restaurant && cartItems.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-600 mb-2">
                Restaurant
              </h2>
              <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 border-l-4 border-orange-500">
                <img
                  src={CDN_URL + restaurant.imageId}
                  alt={restaurant.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {restaurant.name}
                </h2>
              </div>
            </div>
          )}

          {/* Items */}
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              Your cart is empty. Start adding delicious food! 🍕
            </p>
          ) : (
            <>
              <h2 className="text-lg font-semibold text-gray-600 mb-3">
                Items
              </h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.card.info.id} item={item} />
                ))}
              </div>

              {/* Checkout Bar */}
              <div className="sticky bottom-0 bg-white shadow-lg rounded-xl p-4 mt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
                <h2 className="text-xl font-bold text-gray-800">
                  Total: ₹{itemTotal.toFixed(2)}
                </h2>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => dispatch(clearCart())}
                    className="bg-gray-200 text-gray-700 px-5 py-2 rounded-xl font-semibold hover:bg-gray-300 transition w-full sm:w-auto"
                  >
                    Clear Cart
                  </button>

                  <button
                    onClick={() => setShowBill(true)}
                    className="bg-orange-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-orange-600 transition w-full sm:w-auto"
                  >
                    Proceed to Checkout →
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}

      {/* Bill Popup */}
      {showBill && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6">
          <div className="bg-white rounded-2xl w-full max-w-md sm:max-w-lg shadow-2xl border border-gray-200 overflow-hidden animate-fadeIn">
            {/* Header */}
            <div className="bg-[#154D71] text-white p-4 sm:p-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">Order Summary</h2>
              {restaurant && (
                <p className="mt-1 text-sm sm:text-base font-medium opacity-90">
                  {restaurant.name}
                </p>
              )}
            </div>

            {/* Items */}
            <div className="p-4 sm:p-6 max-h-60 sm:max-h-72 overflow-y-auto">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-700">
                Items
              </h3>
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div
                    key={item.card.info.id}
                    className="flex justify-between py-2 text-gray-600"
                  >
                    <span>
                      {item.card.info.name} × {item.quantity}
                    </span>
                    <span>
                      ₹
                      {(
                        ((item.card.info.price ??
                          item.card.info.defaultPrice) /
                          100) *
                        item.quantity
                      ).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bill Summary */}
              <div className="mt-4 sm:mt-6 space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{itemTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST ({gstPercent}%)</span>
                  <span>₹{gstAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t border-gray-300 pt-2">
                  <span>Total Amount</span>
                  <span>₹{finalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowBill(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
              >
                Close
              </button>
              <button
                onClick={handlePayment}
                className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alert */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl border border-gray-300 p-6 text-center animate-fadeIn">
            <div className="bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
              <span className="text-green-600 text-3xl">✔</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Payment Successful
            </h2>
            <p className="text-gray-600 mb-6">
              Your order has been placed successfully 🎉
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className="w-full bg-green-500 text-white py-2 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
