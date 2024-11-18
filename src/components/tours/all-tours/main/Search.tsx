"use client";

import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

import { useSearchParams } from "next/navigation";

import useSearchQuery from "@/hooks/useSearchQuery";

const Search = () => {
  const search = useSearchParams().get("search") || "";

  const [searchText, setSearchText] = useState(search);

  const { setSearchQuery, deleteSearchQuery } = useSearchQuery();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!searchText) {
        deleteSearchQuery("search");
      } else {
        setSearchQuery("search", searchText);
      }
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchText]);

  return (
    <div className="flex items-center bg-lighter border border-solid rounded-md px-1 xs:px-2 py-2 h-full grow sm:grow-0">
      <input
        type="text"
        placeholder="Search Tours..."
        className="bg-transparent placeholder:text-xs sm:placeholder:text-sm focus:outline-none text-xs xs:text-sm grow"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <CiSearch className="text-xl" />
    </div>
  );
};

export default Search;
