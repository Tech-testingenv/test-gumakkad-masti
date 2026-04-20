import React from 'react';
import Link from 'next/link';
const VehicleCard = ({ name, image, description, slug, category }) => {
  return (
    <div className="border-2 border-[#2D0B5A] rounded-xl overflow-hidden flex flex-col bg-white hover:shadow-xl transition">

      {/* Image */}
      <div className="p-2">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-52 sm:h-56 object-cover rounded-md"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow text-center">

        <h3 className="text-lg sm:text-xl font-bold mb-2 uppercase">
          {name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {description}
        </p>

        <Link
  href={`/${category}/${slug}`}
  className="bg-[#2D0B5A] text-white py-2 px-6 rounded-full text-sm hover:bg-[#3d1175] transition inline-block"
>
  View Detail »
</Link>

      </div>
    </div>
  );
};

export default VehicleCard;