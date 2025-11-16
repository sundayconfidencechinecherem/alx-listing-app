import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "@/pages";
import { PropertyProps } from "@/interfaces"; // Import from interfaces
import { PROPERTYLISTINGSAMPLE } from "@/constants"; // Import from constants

const Layout: React.FC = () => {
  const [searchResults, setSearchResults] = useState<PropertyProps[]>(PROPERTYLISTINGSAMPLE);

  return (
    <>
      <Header setSearchResults={setSearchResults} />
      <main className="min-h-screen">
        <Home searchResults={searchResults} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
