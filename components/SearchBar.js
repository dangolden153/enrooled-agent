import React, { useState } from "react";
import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  const [searchData, setSearchData] = useState({
    address: "",
    lname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSearch = () => {
    router.push(`/agents/search?data=${searchData?.address}&lname=${searchData?.lname ? searchData?.lname : null}`);
  };

  return (
    <div className="d-flex flex-column flex-lg-row search-bar">
      <input
        type="text"
        name="address"
        placeholder="Enter Zipcode, City Or State"
        onChange={handleChange}
      />
      <input type="text" name="lname" placeholder="Last Name" onChange={handleChange} />
      <button type="submit" className="search-bar-btn" onClick={handleSearch}>
        Find
      </button>
    </div>
  );
};

export default SearchBar;
