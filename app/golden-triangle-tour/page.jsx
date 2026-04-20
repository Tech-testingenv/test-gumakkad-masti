

"use client";
import React, { useState } from 'react'
import TourCard from '@/components/Tourcard'
import BookNowForm from '@/components/BookNowForm'


export default function  goldenTrianglePackages() {

  const [openModal, setOpenModal] = useState(false)
const [selectedPackage, setSelectedPackage] = useState("")
const goldenTrianglePackages = [
  {
    category: "golden-triangle-tour",
    slug: "paradise-golden-triangle-tour",
    image: "/assets/image/golden.jpg",
    title: "Paradise - Golden Triangle Tour",
    duration: "04 Nights / 05 Days",
    location: "Delhi - Agra - Jaipur",
    description: "Hotel, Breakfast, Transfer, Sightseeing & All Taxes.",
  },
  {
    category: "golden-triangle-tour",
    slug: "classic-golden-triangle-package",
    image: "/assets/image/golden2.jpg",
    title: "Classic Golden Triangle Package",
    duration: "05 Nights / 06 Days",
    location: "Delhi - Agra - Fatehpur Sikri - Jaipur",
    description: "Stay, Breakfast, Transfers, Sightseeing & All Taxes Included.",
  },
  {
    category: "golden-triangle-tour",
    slug: "golden-triangle-honeymoon-special",
    image: "/assets/image/about-us-image-2.webp",
    title: "Golden Triangle Honeymoon Special",
    duration: "06 Nights / 07 Days",
    location: "Delhi - Agra - Jaipur - Amber Fort",
    description: "Romantic Stay, Candlelight Dinner, Sightseeing & Transfers.",
  },
]

  return (
    <div className="bg-white min-h-screen">
  
      
    <div className=" text-black py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Iconic Golden Triangle Tour Packages</h1>
          <p className="text-xl  max-w-4xl mx-auto">
Discover India’s most iconic travel circuit with our Golden Triangle tour packages. Covering Delhi, Agra, and Jaipur, this journey offers a perfect blend of history, culture, and architectural wonders. Visit the majestic Taj Mahal, explore royal palaces and forts, and experience vibrant local markets while enjoying comfortable stays and seamless travel arrangements.
          </p>
        </div>
      </div>

      {/* Tour Packages */}
          <div className="px-4 md:px-10 py-10">

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  { goldenTrianglePackages.map((pkg, index) => (
    <TourCard key={index} {...pkg} 
     setOpenModal={setOpenModal}
  setSelectedPackage={setSelectedPackage}
    />
  ))}

</div>
      </div>

      {/* Additional Information */}
      {/* <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Our Kashmir Tour Packages?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 0116 0zm-1-11a1 1 0 00-1 1v2a1 1 0 002 0V8a1 1 0 00-1-1zm0 4a1 1 0 100 2v2a1 1 0 102 0v-2a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">We offer the most competitive prices for Kashmir tour packages with no hidden charges.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 0116 0zm-1-11a1 1 0 00-1 1v2a1 1 0 002 0V8a1 1 0 00-1-1zm0 4a1 1 0 100 2v2a1 1 0 102 0v-2a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Our experienced travel experts ensure you get the best Kashmir experience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 4a1 1 0 011 1v1a1 1 0 11-2 0V7a1 1 0 011-1zm0 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support throughout your Kashmir journey.</p>
            </div>
          </div>
        </div>
      </div> */}

    

       {openModal && (
  <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4">
    
    <div className="bg-white rounded-xl w-full max-w-md relative">

      {/* CLOSE */}
      <button
        onClick={() => setOpenModal(false)}
        className="absolute top-1 right-1 text-xl font-bold"
      >
        ✕
      </button>

      <BookNowForm packageName={selectedPackage} />

    </div>
  </div>
)}
    </div>
  )
}
