import React, { useState } from "react";
import SearchBar from "@/components/common/SearchBar";
import { PropertyProps } from "@/interfaces";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Button from "../common/Button";

const Header: React.FC<{ setSearchResults: (filtered: PropertyProps[]) => void }> = ({ setSearchResults }) => {

  const [searchQuery, setSearchQuery] = useState("");
  const SignUp = () =>{
    console.log("SignUp Button")
  }
  const SignIn = () =>{
    console.log("SignIn Button")
  }

  return (
    <header className="w-full bg-gray-100  shadow-sm sticky top-0 z-50">

      {/* MOBILE: flex row, DESKTOP: grid */}
      <div className="
        max-w-7xl mx-auto px-4 py-3 
        flex items-center justify-between gap-3
        lg:grid lg:grid-cols-12
      ">
        
        {/* LOGO -- mobile-left / lg:col-span-3 */}
        <div
          className="lg:col-span-1 flex items-center cursor-pointer"
          onClick={() => {
            setSearchResults(PROPERTYLISTINGSAMPLE);
            setSearchQuery("");
          }}
        >
          <img src="/assets/log.png" alt="logo" className="w-10 h-10 object-contain" />
        </div>

        {/* SEARCH -- mobile: flex-grow / lg:col-span-6 */}
        <div className="flex-1 lg:col-span-8 ">
          <SearchBar 
            onSearch={setSearchResults}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex lg:col-span-3 items-center justify-end gap-4">
          <Button text="SignIn" onClick={SignIn} className="bg-white border-[#008489]   text-[#008489] px-4 py-2 rounded-full hover:bg-[#008489]  hover:text-white border-2  transition" />
         
          <Button text="SignUp" onClick={SignUp} className="bg-[#008489] border-[#008489]   text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#008489] border-2  transition" />
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer p-2">
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
              </div>
            </summary>

            <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg py-4 w-48 border border-gray-200">
                <Button text="SignIn" onClick={SignIn} className=" bg-white text-[#008489] block w-full text-left px-4 mb-3 py-2 hover:bg-[#008489] hover:text-white border border-[#008489] transition" />
         
                <Button text="SignUp" onClick={SignUp} className="bg-[#008489] text-white block w-full text-left px-4 py-2 hover:bg-white hover:text-[#008489] border border-[#008489] transition" />
            </div>
          </details>
        </div>

      </div>
    </header>
  );
};

export default Header;
