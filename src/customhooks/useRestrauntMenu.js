import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.854899&lng=77.6679292&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const menuDetails = await data.json();
    console.log(menuDetails.data)
    setMenu(menuDetails.data.cards[4].groupedCard
      .cardGroupMap.REGULAR.cards);
  };

  return menu;
};

export default useRestaurantMenu;
