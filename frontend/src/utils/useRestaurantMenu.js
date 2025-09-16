import { useState, useEffect } from "react";
// import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await fetch(`https://zesto-food-ordering-app.onrender.com/api/menu/${resId}`);
      const json = await data.json();
      setResInfo(json.data);
    } catch (err) {
      console.error("Failed to fetch menu", err);
    }
  };

  if (resId) fetchData();
}, [resId]);

 return resInfo;

}

export default useRestaurantMenu;
