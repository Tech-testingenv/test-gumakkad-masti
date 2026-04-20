'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import  Autoplay  from 'embla-carousel-autoplay'
import Image from 'next/image'

const testimonials = [
  {
      name: 'Rajesh P., India',
      role: '',
      image: 'https://media.istockphoto.com/id/1040308104/photo/mature-handsome-business-man.jpg?s=612x612&w=0&k=20&c=QbyH3XFmLOoy8NESjLQC8PYsm6g3UBL6COFaF-Qnnbk=',
      message: 'Booking my trip through Ghumakkar Masti was an absolute delight! I found fantastic deals for my family vacation. Every part of the journey, from flights to accommodations, was smooth Highly recommend it for anyone looking for a stress-free travel experience!'
    },
  {
      name: 'Rahul Sharma',
      role: 'Freelancer',
      image: 'https://as2.ftcdn.net/v2/jpg/04/22/82/39/1000_F_422823992_ZtyrE96o6wGTJcyZolZ6pLRUGHBRCH9c.jpg',
      message: 'I had the most amazing solo trip to Manali Tour, all thanks to Ghumakkar Masti. The website provided detailed information, great recommendations, and competitive pricing. The support team ensured everything went according to plan. A travel website you can trust!'
    },
  {
      name: 'Priya K., India',
      role: 'Business Owner',
      image: 'https://t4.ftcdn.net/jpg/09/51/46/67/360_F_951466725_dsRcO5UX7k5R4tnzsKJomQQW4PSJhHlj.jpg',
      message: 'Ghumakkar Masti made my honeymoon in Bali unforgettable! The personalized travel itineraries were perfect, and the customer support team helped me every step of the way. The entire trip was hassle-free and memorable. I\'ll definitely book again for my next adventure!'
    }
]

export default function Testimonials() {
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">What Our Guest Says</h2>
          <p className="text-gray-500 mt-4">
            Hear from our satisfied customers about their experiences with our services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="container mx-auto px-0 lg:px-28" id="testimonial">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] lg:flex-[0_0_50%] xl:flex-[0_0_33.333%] px-2">
                  <div className="testimonial-card bg-gray-100 rounded-lg p-6 shadow-md h-[80vh] lg:h-[90vh] xl:h-full z-50">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image}
                        alt={`User ${index + 1}`}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                        {testimonial.role && (
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-black">
                      "{testimonial.message}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
          </div>
      </section>
  
  )
}
