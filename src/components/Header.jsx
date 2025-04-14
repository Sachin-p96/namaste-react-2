import { useContext, useState } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginCLick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const cartItems  = useSelector((store) => store.cart.items)
  const userData = useContext(UserContext)
  return (
    <div className="header">
      <img
        className="logo"
        src="https://img.freepik.com/premium-vector/logo-food-company-that-says-sun-sun-sunflower_917213-253424.jpg?semt=ais_hybrid"
      />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocerry">Grocerry</Link>
          </li>
          <li>
            {" "}
            <Link to="/cart">{`Cart (${cartItems.length} items)`}</Link>
          </li>

          <button onClick={handleLoginCLick}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          <li>
            {" "}
            {userData.loggedinUser};
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
