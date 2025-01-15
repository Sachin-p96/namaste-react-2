import { useState } from "react";

export const Header = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const handleLoginCLick = () => {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <div className="header">
      <img
        className="logo"
        src="https://img.freepik.com/premium-vector/logo-food-company-that-says-sun-sun-sunflower_917213-253424.jpg?semt=ais_hybrid"
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button onClick = {handleLoginCLick}>{isLoggedIn? 'Logout' : 'Login'}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
