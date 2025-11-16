import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Column 1: About */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">ALX</h2>
          <p className="text-sm">
            ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. 
            From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
          </p>
        </div>

        {/* Column 2: Explore */}
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>Apartments in Dubai</li>
            <li>Hotels in New York</li>
            <li>Villa in Spain</li>
            <li>Mansion in Indonesia</li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Customers</li>
            <li>Brand</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* Column 4: Help */}
        <div>
          <h3 className="font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>Support</li>
            <li>Cancel booking</li>
            <li>Refunds Process</li>
            <li>Some hotels require you to cancel more than 24 hours before check-in.</li>
          </ul>
        </div>

      </div>

      {/* Bottom Row: copyright + policies */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-sm flex flex-col items-center lg:grid lg:grid-cols-12 lg:items-center">
  {/* Empty spacer on large screens */}
  <div className="hidden lg:block lg:col-span-4"></div>

  {/* Center ALX */}
  <div className="col-span-4 text-center">
    &copy; {new Date().getFullYear()} ALX. All rights reserved.
  </div>

  {/* Right-aligned links */}
  <ul className="flex space-x-6 mt-2 lg:mt-0 lg:justify-end lg:col-span-4">
    <li className="hover:text-[#008489] cursor-pointer">Terms of Service</li>
    <li className="hover:text-[#008489] cursor-pointer">Policy Service</li>
    <li className="hover:text-[#008489] cursor-pointer">Cookies Policy</li>
  </ul>
</div>

    </footer>
  );
};

export default Footer;
