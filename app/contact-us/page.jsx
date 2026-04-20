'use client'
import ContactForm from '@/components/Contactform'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa'

export default function ContactInfo() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-8 lg:px-20">

      {/* FLEX CONTAINER */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* LEFT */}
        <div className="flex-1 p-6 border-2 border-black rounded-2xl bg-gray-100 flex flex-col">

          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900">
            CONTACT INFORMATION
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-3 mb-6"></div>

          <div className="flex gap-4 mb-6">
            <FaMapMarkerAlt className="text-orange-500 w-6 h-6 mt-1" />
            <p className="text-gray-700 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>

          <div className="flex gap-4 mb-6">
            <FaMapMarkerAlt className="text-orange-500 w-6 h-6 mt-1" />
            <p className="text-gray-700 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <FaPhoneAlt className="text-orange-500" />
            <p>+91-99, +91-7385789</p>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <FaEnvelope className="text-orange-500" />
            <p className="break-all">booking@ghumakkarmasti.in</p>
          </div>

          {/* PUSH SOCIAL TO BOTTOM */}
          <div className="mt-20">

            <h3 className="text-center font-bold text-xl text-blue-900">
              Social Media
            </h3>

            <div className="w-24 h-1 bg-orange-500 mx-auto mt-2 mb-6"></div>

            <div className="flex justify-center gap-4">
              <a href="#" className="bg-orange-500 p-3 rounded-full text-white"><FaFacebookF /></a>
              <a href="#" className="bg-orange-500 p-3 rounded-full text-white"><FaInstagram /></a>
              <a href="#" className="bg-orange-500 p-3 rounded-full text-white"><FaWhatsapp /></a>
              <a href="#" className="bg-orange-500 p-3 rounded-full text-white"><FaYoutube /></a>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex">
          <ContactForm />
        </div>

      </div>
    </div>
  )
}