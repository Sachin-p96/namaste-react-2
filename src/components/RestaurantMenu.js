import { useEffect, useState } from "react";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.854899&lng=77.6679292&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const menuDetails = await data.json();
    setMenu(menuDetails.data.cards[2].card.card.info.cuisines);
  };
  return (
    <>
      <h1>
        {menu.map((item, key) => (
          <>
            <h1>{item}</h1>
          </>
        ))}
      </h1>
    </>
  );
};

export default RestaurantMenu;
