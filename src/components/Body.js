import React, { useEffect, useState } from "react";
import { RestoCard } from "./RestoCard";
import { restoDetails } from "../utils/constants";
import SearchBar from "./SearchBar";

export const Body = () => {
  const [filterRest, setFilterRest] = useState(restoDetails);

  const handleClick = (value) => {
    console.log("Hey Im Clicked", value);
    const filteredList = restoDetails.filter((item) => {
      return item.info.name.toUpperCase().includes(value.toUpperCase());
    });
    setFilterRest(filteredList);
  };
  console.log(filterRest);
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
