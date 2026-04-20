'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function TourCard({
  image,
  title,
  duration,
  location,
  description,
  slug,
  category,
  setOpenModal,
setSelectedPackage,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
      
      {/* Image */}
      <div className="relative w-full h-56 md:h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Top Content */}
        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
            {title}
          </h3>

          <p className="text-orange-500 font-semibold text-sm md:text-base mb-2">
            {duration} | {location}
          </p>

          <p className="text-gray-600 text-sm md:text-base mb-4">
            {description}
          </p>
        </div>

        {/* 🔥 Buttons always bottom */}
        <div className="flex flex-wrap gap-2 mt-auto">
          
       
          {/* ✅ MODAL BUTTON */}
          <button
            onClick={() => {
              setSelectedPackage(title)
              setOpenModal(true)
            }}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm md:text-base"
          >
            BOOK NOW
          </button>

          <Link
href={`/${category}/${slug}`}            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm md:text-base text-center"
          >
            DETAILS
          </Link>

          <Link
            href="https://wa.me/919999999999"
            target="_blank"
            className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm md:text-base text-center"
          >
            WhatsApp
          </Link>

        </div>

      </div>
    </div>
  )
}