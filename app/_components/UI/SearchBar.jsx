"use client";

import { IoIosSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className="pt-2 relative ml-4 font-themeFont text-gray-600">
      <input
        className="border-2 focus:w-28 w-12 focus:lg:w-48 focus:md-28 lg:w-48 md:w-28 px-1  md:px-3 md:pr-9 lg:px-5  lg:pr-16  bg-white h-9 rounded-full text-sm focus:outline-none placeholder:invisible md:placeholder:visible md:placeholder:text-slate-400"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button
        type="submit"
        className="absolute right-0 items-center top-0 mt-[18px] mr-4"
      >
        <IoIosSearch />
      </button>
    </div>
  );
}

export default SearchBar;
