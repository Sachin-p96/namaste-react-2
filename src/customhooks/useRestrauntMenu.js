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
    setMenu(menuDetails.data.cards[2].card.card.info.cuisines);
  };

  return menu;
};

export default useRestaurantMenu;
