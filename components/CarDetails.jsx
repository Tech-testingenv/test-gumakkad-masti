'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'

export default function VehicleDetail({
  pageTitle ="",
  images = [],
  title = "",
  intro = "",
  description = "",
  features = [],
  whyChoose = []
}) {

  const [activeImg, setActiveImg] = useState(0)

  const next = () => {
    setActiveImg((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setActiveImg((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-2 sm:py-4 md:py-4">

      {/* ================= TOP HEADING ================= */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D0B5A] leading-tight">
          {pageTitle}
        </h1>
        <div className="w-20 sm:w-24 h-1 bg-[#2D0B5A] mt-2"></div>
      </div>

      {/* ================= IMAGE GALLERY ================= */}
      <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[16/9]">

        <img
          src={images[activeImg]}
          className="w-full h-full object-cover"
        />

        <button
          onClick={prev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 sm:p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={next}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 sm:p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* ================= THUMBNAILS ================= */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 gap-2 mt-3">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            onClick={() => setActiveImg(idx)}
            className={`h-16 sm:h-20 object-cover cursor-pointer rounded border-2 ${
              activeImg === idx ? 'border-purple-900' : 'border-transparent'
            }`}
          />
        ))}
      </div>

      {/* ================= INTRO ================= */}
      <section className="mt-8 md:mt-10">
        <h2 className="text-lg sm:text-xl font-bold border-b-2 inline-block mb-3 md:mb-4">
          Introduction
        </h2>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {intro}
        </p>
      </section>

      {/* ================= MAIN BOX ================= */}
      <div className="mt-10 md:mt-12 border-2 border-[#2D0B5A] p-4 sm:p-6 md:p-10 rounded-sm">

        <h2 className="text-xl sm:text-2xl font-extrabold mb-2 md:mb-3">
          {title}
        </h2>

        <p className="text-gray-600 mb-4 md:mb-6 text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        {/* FEATURES */}
        <h3 className="text-base sm:text-lg font-bold mb-2 md:mb-3">
          Key Features
        </h3>

        <ul className="space-y-2 md:space-y-3 mb-8 md:mb-10">
          {features.map((item, index) => (
            <li key={index} className="flex gap-2 text-sm sm:text-base">
              <Check className="text-gray-500 mt-1 shrink-0" size={16} />
              <span>
                <strong className="text-gray-900">{item.title}</strong> – {item.desc}
              </span>
            </li>
          ))}
        </ul>

        {/* ================= WHY CHOOSE US ================= */}
        {whyChoose.length > 0 && (
          <div className="border-t pt-6 md:pt-8">

            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 md:mb-6">
              Why Choose Us?
            </h3>

            <div className="space-y-3 md:space-y-4">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="pb-3 border-b last:border-none">

                  <h4 className="font-semibold text-base sm:text-lg md:text-xl text-gray-900 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-1">
                    {item.desc}
                  </p>

                </div>
              ))}
            </div>

          </div>
        )}

      </div>

    </div>
  )
}