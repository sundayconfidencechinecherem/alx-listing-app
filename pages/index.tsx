import React from 'react';
import Card from '../components/common/Card';

export default function Home() {
  // Create functions here
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          ALX Listing App
        </h1>
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          <Card
            title="Beautiful Beach House"
            description="Stunning beachfront property with ocean views"
            price={120}
            imageUrl="/assets/image 2.png" 
            rating={4.9}
            amenities={['wifi', 'pool', 'kitchen']}
            location='lagos'
            
          />
          
          <Card
            title="Mountain Cabin" 
            description="Cozy cabin in the mountains for a peaceful retreat"
            price={85}
            imageUrl="/assets/image 3.png"
            rating={2.5}
            location='abuja'
             amenities={['wifi', 'pool', 'kitchen', 'bed']}
          
          />
          <Card
            title="Mountain Cabin" 
            description="Cozy cabin in the mountains for a peaceful retreat"
            price={805}
            imageUrl="/assets/image 4.png"
            rating={1.5}
            location='Enugu'
             amenities={['wifi', 'kitchen', 'bed', 'people']}
          />
          <Card
            title="Mountain Cabin" 
            description="Cozy cabin in the mountains for a peaceful retreat"
            price={805}
            imageUrl="/assets/image 4.png"
            rating={3.5}
            location='Port Harcourt'
             amenities={['wifi', 'kitchen', 'bed', 'people']}
          />
        </div>
      </div>
    </div>
  );
}