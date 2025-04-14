import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ item }) => {
  const dispatch = useDispatch()
  const handleAddItem = (item) =>{
    dispatch(addItem(item.card.info.name))
  }
 console.log(item, "heyItemMEnu");
  return (
    item.card.card.itemCards.map((item,index)=>(
       <div className="flex justify-between mt-1 mb-2">
      <div>{item.card.info.name}</div>
      <button className=" border-2  border-solid" onClick={()=>handleAddItem(item)}>Add +</button>
    </div>
    ))
   
  );
};

export default ItemList;
