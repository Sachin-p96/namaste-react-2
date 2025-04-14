import { useSelector } from "react-redux";

const Cart =()=>{
   
    const cartItems  = useSelector((store) => store.cart.items)
   return (
    <>
       {cartItems.map((item,index)=>
                <h1>Hey {item}</h1>
       )}
    </>
   ) 
}

export default Cart;