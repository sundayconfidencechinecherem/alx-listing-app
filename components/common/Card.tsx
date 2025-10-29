import React from "react";
import { CardProps } from "@/interfaces";
import Image from "next/image";
import { AmenityIcons } from "../amenities";

const Card: React.FC <CardProps> = ({title, description, imageUrl, rating, price, amenities, location }) => {
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg pb-10">
            <div className="px-6 py-4">
                <Image className="rounded-lg" src={imageUrl}  alt={title} width={400} height={400}/>
            </div>
            <div className="mx-6 my-4 flex">
                <div>
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="text-gray-500 w-2/3">{description}</p>
                </div>
                <div className="flex items-center gap-1">
                    <Image src="/assets/Star 1.png" width={10} height={10} alt="star rating"/>
                    <span>{rating}</span>
                </div>
            </div>
            <div className="ml-6">
                <p className="text-gray-500">{location}</p>
            </div>
            <div className="flex  justify-between mx-6">
                 <div className="flex flex-wrap gap-3 mt-3">
                    {amenities.map((amenity) => (
                        <Image key={amenity} src={AmenityIcons[amenity]} alt="amenity"  width={16} height={16} />
                    ))}
                </div>
                <div>
                    <span>${price}</span>
                    <span>/night</span>
                </div>
            </div>
               
                    

                    
            <div>
                
            </div>
        </div>
    )
}

export default Card;