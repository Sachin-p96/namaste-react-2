import React, { useEffect, useState } from "react";
import { RestoCard } from "./RestoCard";
import { restoDetails } from "../utils/constants";
import SearchBar from "./SearchBar";
import { Image, Breathing } from "react-shimmer";
import {
  ShimmerFeaturedGallery,
  ShimmerSimpleGallery,
} from "react-shimmer-effects";

export const Body = () => {
  const [filterRest, setFilterRest] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.854899&lng=77.6679292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dataJson = await data.json();
    console.log(
      dataJson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      "heyData"
    );
    setFilterRest(
      dataJson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const handleClick = (value) => {
    console.log("Hey Im Clicked", value);
    const filteredList = restoDetails.filter((item) => {
      return item.info.name.toUpperCase().includes(value.toUpperCase());
    });
    setFilterRest(filteredList);
  };
  console.log(filterRest);
  if (filterRest.length === 0) {
    return (
      <div>
        <ShimmerFeaturedGallery row={2} col={2} card frameHeight={600} />
      </div>
    );
  }
  return (
    <div className="body">
      <div className="search-container">
        <SearchBar onClickFunction={handleClick} />
      </div>
      <div className="resto-container">
        {filterRest.map((item, index) => {
          return (
            <RestoCard
              name={item.info.name}
              imageId={item.info.cloudinaryImageId}
            />
          );
        })}
      </div>
    </div>
  );
};
