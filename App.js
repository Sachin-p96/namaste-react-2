import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
const RestoCard = () => {
  return <div className="res-card">
    <img  className="resto-image" src="https://media-cdn.tripadvisor.com/media/photo-o/0d/f5/c6/b2/photo8jpg.jpg" />
    <h3>Meghana Foods</h3>
    <span>3 star</span>
    <p>Highly Rated restaurant in banglore for andhra style biriyani</p>

  </div>;
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <div>Search bar</div>
        <div>search button</div>
      </div>
      <div className="resto-container">
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
