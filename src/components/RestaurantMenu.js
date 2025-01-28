import { useParams } from "react-router";
import useRestaurantMenu from "../customhooks/useRestrauntMenu";

const RestaurantMenu = () => {
  const params = useParams();
  const data = useRestaurantMenu(params.id);
  return (
    <>
      <h1>
        {data.map((item, key) => (
          <>
            <span>{item}</span>
          </>
        ))}
      </h1>
    </>
  );
};

export default RestaurantMenu;
