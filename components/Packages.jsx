'use client'

import { useCallback, useState } from 'react'
import BookNowForm from '@/components/BookNowForm'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// Tour Package Card Component
function TourPackageCard({
  title,
  description,
  imageUrl,
  slug,
  setOpenModal,
  setSelectedPackage,
  detailUrl = "",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">

      {/* Image */}
      <div className="relative">
        <Link href={detailUrl}>
          <Image
            src={imageUrl}
            alt="Tour Image"
            width={400}
            height={250}
            className="w-full h-[200px] sm:h-[220px] md:h-[250px] object-cover"
          />
        </Link>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-base sm:text-lg font-bold text-gray-800">
          {title}
        </h2>

        <p className="text-black text-xs sm:text-sm mt-1">
          {description}
        </p>

        <p className="text-green-600 text-xs sm:text-sm mt-1">
          Best Service Guarantee
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => {
              setSelectedPackage(title)
              setOpenModal(true)
            }}
            className="flex-1 text-xs sm:text-sm bg-blue-700 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            BOOK NOW
          </button>

          <Link
            href={slug}
            className="flex-1 text-center text-xs sm:text-sm bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            DETAIL
          </Link>

          <a
            href="https://wa.me/919821325561"
            target="_blank"
            className="bg-green-500 text-white px-3 py-2 rounded-lg flex items-center justify-center hover:bg-green-600 transition"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-base sm:text-lg" />
          </a>
        </div>
      </div>
    </div>
  )
}

// Data (unchanged)
const specialPackages = [
  {
    title: 'Kashmir Tour',
    description: 'Hotel, Breakfast, Transfer, Sightseeing & All Taxes.',
    imageUrl: 'https://th.bing.com/th/id/OIP.Gb4KN3OvhW5UnqwpYFpb1AHaEK?rs=1&pid=ImgDetMain',
    slug: '/kashmir-tours-packages',
    bookUrl: '/kashmir-tours-packages'
  },
  {
    title: 'Sikkim Darjeeling Tour',
    description: 'Hotel, Breakfast, Transfer, Sightseeing & All Taxes.',
    imageUrl: 'https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1585127333_d_and_g_1.jpg',
    slug: '/sikkim-darjeeling-tour',
    bookUrl: '/sikkim-darjeeling-tour'
  },
  {
    title: 'Andaman Tour',
    description: 'Hotel, Breakfast, Transfer, Sightseeing & All Taxes.',
    imageUrl: 'https://www.ghumindiaghum.com/blog/wp-content/uploads/2022/08/andaman.jpg',
    slug: '/andaman-packages',
    bookUrl: '/andaman-packages'
  },
  {
    title: 'Goa Tour',
    description: 'Hotel, Breakfast, Transfer, Sightseeing & All Taxes.',
    imageUrl: 'https://www.holidify.com/images/bgImages/GOA.jpg',
    slug: '/goa-tour',
    bookUrl: '/goa-tour-packages'
  }
]

const weekendPackages = [
  {
    title: 'Shimla Manali Tour',
    description: 'Hotel, Breakfast, Transfer, Sightseeing & All Taxes.',
    imageUrl: 'https://www.mountainmasti.com/uploads/1520077931-manali-tour-package.jpg',
    slug: '/shimla-manali-tour',
    bookUrl: '/shimla-manali-tour'
  },
  {
    title: 'Rajasthan Tour',
    description: 'Hotel, Breakfast, Transfer, Sightseeing & All Taxes.',
    imageUrl: '/assets/image/rajasthan.jpg',
    slug: '/rajasthan-tour',
    bookUrl: '/rajasthan-tour-packages'
  },
  {
    title: 'Golden Triangle Tour',
    description: 'Hotel, Breakfast, Transfer, Sightseeing & All Taxes.',
    imageUrl: 'https://www.toursandtaxi.com/wp-content/uploads/2021/11/delhi-agra-jaipur-tour.jpg',
    slug: '/golden-triangle-tour',
    bookUrl: '/golden-triangle-tour'
  }
]

// Carousel Component
function PackageCarousel({
  packages,
  title,
  subtitle,
  id,
  setOpenModal,
  setSelectedPackage
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
      <div className="text-center my-8 sm:my-10" id={id}>
        {subtitle && (
          <p className="text-orange-500 text-xs sm:text-sm font-semibold tracking-widest">
            {subtitle}
          </p>
        )}

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mt-2">
          {title}
        </h2>

        <div className="w-12 sm:w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-5 xl:px-20 relative mb-[8vh]">

        {/* Navigation */}
        <button
          onClick={scrollPrev}
          className="custom-nav custom-prev absolute z-10 text-lg sm:text-xl"
        >
          &#10094;
        </button>

        <button
          onClick={scrollNext}
          className="custom-nav custom-next absolute z-10 text-lg sm:text-xl"
        >
          &#10095;
        </button>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2"
              >
                <TourPackageCard
                  {...pkg}
                  setOpenModal={setOpenModal}
                  setSelectedPackage={setSelectedPackage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default function Cards() {
  const [openModal, setOpenModal] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("")

  return (
    <>
      <PackageCarousel
        packages={specialPackages}
        title="SPECIAL TOUR PACKAGES"
        subtitle="SPECIAL PACKAGES"
        id="Packages"
        setOpenModal={setOpenModal}
        setSelectedPackage={setSelectedPackage}
      />

      <PackageCarousel
        packages={weekendPackages}
        title="Weekend TOUR PACKAGES"
        subtitle=""
        id="WeekendPackages"
        setOpenModal={setOpenModal}
        setSelectedPackage={setSelectedPackage}
      />

      {/* Modal */}
       {openModal && (
       <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4 ">
         
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
    </>
  )
}