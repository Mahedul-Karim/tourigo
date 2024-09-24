import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="flex items-center bg-lighter border border-solid rounded-md px-1 xs:px-2 py-2 h-full grow sm:grow-0">
      <input
        type="text"
        placeholder="Search Tours..."
        className="bg-transparent placeholder:text-xs sm:placeholder:text-sm focus:outline-none text-xs xs:text-sm grow"
      />
      <CiSearch className="text-xl" />
    </div>
  );
};

export default Search;
