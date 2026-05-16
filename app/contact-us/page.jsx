'use client'
import ContactForm from '@/components/Contactform'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

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

            <a
              href="tel:+918744878555"
              className="hover:text-orange-500"
            >
              +91-8744878555
            </a>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <FaEnvelope className="text-orange-500" />

            <a
              href="mailto:booking@ghumakkarmasti.in"
              className="break-all hover:text-orange-500"
            >
              booking@ghumakkarmasti.in
            </a>
          </div>

          {/* PUSH SOCIAL TO BOTTOM */}
          <div className="mt-20">

            <h3 className="text-center font-bold text-xl text-blue-900">
              Social Media
            </h3>

            <div className="w-24 h-1 bg-orange-500 mx-auto mt-2 mb-6"></div>

            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/ghumakkarmasti"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 p-3 rounded-full text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/ghumakkarmasti"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 p-3 rounded-full text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/918744878555"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 p-3 rounded-full text-white"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://x.com/ghumakkarmasti"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 p-3 rounded-full text-white"
              >
                <FaXTwitter />
              </a>
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

