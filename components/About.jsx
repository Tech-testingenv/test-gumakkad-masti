
"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div id="about" className="flex justify-center text-black py-16 px-6 h-auto w-full">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 h-full w-full md:mx-5 md:px-10">
        {/* Left Section: Images */}
        <div className="w-full flex gap-2 md:gap-4 md:h-full">
          <div className="">
            <Image
              src="/assets/image/about us image.webp"
              alt="Girl Doing Payment"
              width={600}
              height={400}
              className="rounded-lg shadow-lg md:w-full h-full md:h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="w-full space-y-2 md:space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            Ghumakkar Masti
          </h1>
          <p className="text-md md:text-lg leading-relaxed text-black text-justify">
            Ghumakkar masti is one of the leading Holiday Deal provider company in Delhi india.Ghumakkar Masti provide all
            kind of Travel package like kashmir packages, Leh and ladakh Packages,Portblair holiday packages,north East
            tour packages, Shimla manali Packages,Wildlife packages,South India Packages,South India Religious tour
            packages,Chardham yatra,Mata vashinov Devi yatra,Indian cultural Tours,Discover Kerla tours and many more
            packages is not a valid packages with customise according to your need.
            Ghumakkar Masti will be your good travel partner we are comitted to provide good services and satisfaction of
            our customers.
          </p>

          <div className="mt-5 md:mt-20">
            <Link href="/about"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-3 md:px-6 py-1.5 md:py-3 rounded-lg shadow-md transition-colors"
            >
              Read More ...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
