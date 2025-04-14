import { useParams } from "react-router";
import useRestaurantMenu from "../customhooks/useRestrauntMenu";
import { useState } from "react";
import ItemList from "./ItemList";
const RestCategory = (props) => {
  console.log(props.showItems,'showitems--',props.blah)
  console.log(props.showItems,'hey')
  return (
    <div>
      <div className="flex justify-between ">
        <div>{props.item.card.card.title}</div>
        <button onClick={()=>props.handleClick(props.blah)} >⬇️</button>
      </div>
      <div>{props.showItems && <ItemList item={props.item} />}</div>
    </div>
  );
};
const RestaurantMenu = () => {
  const [showIndex,setShowIndex] = useState(0)
  const [closeItem,setCloseItem] = useState(false)
  const params = useParams();
  const data = useRestaurantMenu(params.id);
  
  const handleClick = (i) => {
    setShowIndex(i)
    console.log('index,showIndex--',i,showIndex) 
    if( i == showIndex){
      setCloseItem(true)
    }
    else{
      setCloseItem(false)
    }  
  }
  console.log(data, "hey");
  let restoSection = data.filter((item) =>
    item.card.card["@type"].includes("ItemCategory")
  );
  console.log("heySections", restoSection);

  return (
    <div>
      <div className="p-2">
        {restoSection.map((item,index) => {
          console.log('index,showIndex',index,showIndex)

          return <div className="border-amber-800 border-1 shadow-lg p-2 m-2">
            <RestCategory item={item} blah = {index}   showItems={index == showIndex && !closeItem ? true:false} handleClick={handleClick}/>
          </div>
})}
      </div>
    </div>
  );
};

export default RestaurantMenu;
