import React, { useState } from "react";
import Card from "@/components/common/Card";
import Pill from "@/components/common/Pill";
import { PropertyProps } from "@/interfaces"; 
import { FILTERS } from "@/constants";

const Home: React.FC<{ searchResults: PropertyProps[] }> = ({ searchResults }) => {
  const [activeFilter, setActiveFilter] = useState("");
  

  // Compute displayList directly without useEffect
  const displayList = activeFilter
    ? searchResults.filter((p) => p.category.includes(activeFilter))
    : searchResults;

  return (
    <div>
      {/* Hero Section */}
     <section
        className="relative h-[380px] bg-cover bg-center text-white text-center flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url("/assets/image20.png")' }}>
        {/* Mobile-only dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Find your favorite place here!
          </h1>

          <p className="mt-4 mx-6 rounded-lg bg-[#008489] text-white px-6 py-2 md:text-lg md:rounded-full">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
    </section>


      {/* Main Content */}
      <div className="container mx-auto py-6">
        {/* Pills */}
        <div className="flex flex-wrap gap-3 mb-4 justify-center">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(activeFilter === filter ? "" : filter)}
            />
          ))}

          {/* Clear Filter Button */}
          {activeFilter && (
            <button
              className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600"
              onClick={() => setActiveFilter("")}
            >
              Clear Filter
            </button>
          )}
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayList.map((property) => (
            <Card key={property.name} data={property} />
          ))}
        </div>

        {/* Empty State */}
        {displayList.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No properties found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;