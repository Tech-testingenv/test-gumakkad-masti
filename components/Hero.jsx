'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Navbar from './Navbar'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Hero() {
  return (
    <div id="home" className="relative w-full h-[40vh] md:h-[80vh]">

      {/* 🔥 Navbar Overlay */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[40vh] md:h-[80vh]">
            <Image
              src="/assets/image/image.jpg"
              alt="Slide 1"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[40vh] md:h-[80vh]">
            <Image
              src="/assets/image/image2.jpg"
              alt="Slide 2"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[40vh] md:h-[80vh]">
            <Image
              src="/assets/image/sara1739614758308.jpg"
              alt="Slide 3"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative w-full h-[40vh] md:h-[80vh]">
            <Image
              src="/assets/image/image2.webp"
              alt="Slide 4"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="relative w-full h-[40vh] md:h-[80vh]">
            <Image
              src="/assets/image/image3.jpg"
              alt="Slide 5"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}