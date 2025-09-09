import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // const [btnName, setbtnName] = useState("Login");
  // const onlineStatus = useOnlineStatus();

  // const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center px-8 py-5 shadow-md bg-orange-600">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="h-16 w-16 rounded-xl" // increased size and slightly rounded corners
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthvnext.bing.com%2Fth%2Fid%2FOIP.Q4uNq1Q_3_ooXJn-NSDwCAHaHa%3Fr%3D0%26cb%3Ducfimgc2%26pid%3DApi&f=1&ipt=a01b632e1825aef7f109c2990c097ec1b67743fa01093153e1b232da8d79e97a"
          alt="App Logo"
        />
        <Link to="/">
          <h1 className="ml-3 text-3xl font-bold font-roboto text-white">Zesto</h1>
        </Link>
      </div>

      {/* Navigation */}
      <div className="ml-auto">
        <ul className="flex items-center space-x-6 font-medium text-white">
          {/* <li>
            Status: {onlineStatus ? "🟢" : "🔴"}  
          </li> */}
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/restaurants" className="hover:text-yellow-300">
              Restaurants
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">
              Contact Us
            </Link>
          </li>
          {/* <li>
            <Link to="/grocery" className="hover:text-primary">
              Grocery
            </Link>
          </li> */}
          <li className="flex items-center">
            <Link to="/cart" className="relative inline-flex items-center">
              {/* Cart Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 16 16"
                id="cart"
                className="text-white fill-current"
              >
                <path d="M14 13.1V12H4.6l.6-1.1 9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5 5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4.9L4 5z" />
              </svg>

              {/* Badge */}
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-orange-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>

          {/* <li>
            <button
              className="btn btn-sm btn-outline ml-4"
              onClick={() =>
                setbtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
            >
              {btnName}
            </button>
          </li>
          <li>{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
