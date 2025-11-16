import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

interface SearchBarProps {
  onSearch: (filtered: PropertyProps[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, searchQuery, setSearchQuery }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      onSearch(PROPERTYLISTINGSAMPLE);
      return;
    }

    const filtered = PROPERTYLISTINGSAMPLE.filter((property) =>
      property.name.toLowerCase().includes(value.toLowerCase())
    );

    onSearch(filtered);
  };

  return (
    <div className="w-full relative">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search accommodations..."
        className="w-full border border-[#008489b4] rounded-full px-4 py-2 focus:ring-2 focus:ring-[#008489] focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
