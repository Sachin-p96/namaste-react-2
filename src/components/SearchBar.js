import { useState } from "react";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value, "search");
    setSearchValue(e.target.value);
  };
  return (
    <>
      <div className="search-input">
        <input
          type="text"
          className="search-input-field"
          label="Search"
          placeholder="Search Your Restaurant"
          value={searchValue}
          onChange={handleChange}
        ></input>
        <button
          className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
          onClick={() => props.onClickFunction(searchValue)}
        >
          Click me
        </button>
      </div>
    </>
  );
};
export default SearchBar;
