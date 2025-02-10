import { useParams } from "react-router";
import useRestaurantMenu from "../customhooks/useRestrauntMenu";
import { useState } from "react";
import ItemList from "./ItemList";
const RestCategory = ({ item }) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const handleAcoordionClick = () => {
    setOpenAccordion(!openAccordion);
  };
  return (
    <div>
      <div className="flex justify-between ">
        <div>{item.card.card.title}</div>
        <button onClick={handleAcoordionClick}>⬇️</button>
      </div>
      <div>{openAccordion && <ItemList item={item} />}</div>
    </div>
  );
};
const RestaurantMenu = () => {
  const params = useParams();
  const data = useRestaurantMenu(params.id);
  console.log(data, "hey");
  let restoSection = data.filter((item) =>
    item.card.card["@type"].includes("ItemCategory")
  );
  console.log("heySections", restoSection);

  return (
    <div>
      <div className="p-2">
        {restoSection.map((item, index) => (
          <div className="border-amber-800 border-1 shadow-lg p-2 m-2">
            <RestCategory item={item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
