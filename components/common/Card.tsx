import React from "react";
import { PropertyProps } from "@/interfaces";
import { AmenityIcons } from './amenities';
import { FILTERS } from '@/constants';
import Button from "./Button";
import Image from "next/image";

interface CardProps {
  data: PropertyProps;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const handleViewDetails = () => {
    console.log("View details for:", data.name);
  };

  // Find which filters match this property's categories
  const matchingFilters = FILTERS.filter(filter => 
    data.category.includes(filter)
  );

  return (
    <div className="mx-6 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      {/* Image with Discount Badge */}
      <div className="relative">
        <Image
          src={data.image}
          alt={data.name}
          width={400}  // Add width
          height={192} // Add height
          className="w-full h-48 object-cover"
        />
        {data.discount && (
          <span className="absolute top-2 left-2 px-2 py-1 text-xs font-semibold bg-[#FF5A5F] text-white rounded-full">
            {data.discount}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Property Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{data.name}</h2>
          <p className="text-sm text-gray-600 mt-1">
            {data.address.city}, {data.address.country}
          </p>
        </div>

        {/* Display matching filters as tags */}
        {matchingFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {matchingFilters.map((filter) => (
              <span 
                key={filter}
                className="px-2 py-1 bg-blue-50 text-[#008489] text-xs rounded-full border border-blue-200"
              >
                {filter}
              </span>
            ))}
          </div>
        )}

        {/* Offers and Rating in same row */}
        <div className="flex justify-between items-center">
          {/* Offers in rectangular form with black border - Aligned left */}
          <div className="flex items-center gap-4 text-sm text-gray-600 border border-black rounded-lg px-3 py-2">
            {/* Beds with number */}
            <div className="flex items-center gap-1">
              <Image 
                src={AmenityIcons.bed} 
                alt="beds" 
                width={16}  // Add width
                height={16} // Add height
              />
              <span>{data.offers.bed}</span>
            </div>
            
            {/* Baths with number */}
            <div className="flex items-center gap-1">
              <Image 
                src={AmenityIcons.bathroom} 
                alt="baths" 
                width={16}  // Add width
                height={16} // Add height
              />
              <span>{data.offers.shower}</span>
            </div>

            {/* Occupants with number */}
            <div className="flex items-center gap-1">
              <Image 
                src={AmenityIcons.people} 
                alt="occupants" 
                width={16}  // Add width
                height={16} // Add height
              />
              <span>{data.offers.occupants}</span>
            </div>
          </div>

          {/* Rating - Aligned right */}
          <div className="flex items-center gap-1 px-2 py-1">
            <span className="text-yellow-600 font-medium text-sm">{data.rating}</span>
            <Image 
              src="/assets/Star.png" 
              alt="star rating" 
              width={16} 
              height={16} 
            />
          </div>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center pt-2">
          <p className="text-[#008489] font-bold text-lg">${data.price}/night</p>
          <Button 
            onClick={handleViewDetails}  
            text="View Details" 
            className="bg-[#008489] text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#008489] border transition text-sm" 
          />
        </div>
      </div>
    </div>
  );
};

export default Card;