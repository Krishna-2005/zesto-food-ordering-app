import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useContext } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Restaurants from "./components/Restaurants";

//lazy loading loads the file only when the component is clicked
//on demand loading
//dynamic loading

const About = lazy(() => import("./components/About"));

// const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const { loggedInUser } = useContext(UserContext);

  const [userName, setUserName] = useState(loggedInUser);

  useEffect(() => {
    const data = {
      name: "Krishna S",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path:"/restaurants",
        element: <Restaurants/>,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
