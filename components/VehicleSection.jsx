import React from 'react';
import VehicleCard from './VehicleCard';

export default function VehicleSection({ Heading, Paragraph, data }) {
  return (
    <div className="text-black py-6 sm:py-8 lg:py-10 ">

      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-10">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {Heading}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 text-justify pt-3">
          {Paragraph}
        </p>

      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 grid gap-6 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

        {data && data.length > 0 ? (
          data.map((item, index) => (
            <VehicleCard key={index} {...item} />
          ))
        ) : (
          <p className="text-center col-span-full">No Data Found</p>
        )}

      </div>

    </div>
  );
}