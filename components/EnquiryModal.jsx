'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FaTimes } from 'react-icons/fa'

export default function EnquiryModal({ isOpen, onClose }) {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      message: '',
      agree: false
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid').required('Required'),
      phone: Yup.string().matches(/^[0-9]{10}$/, 'Invalid').required('Required'),
      date: Yup.string().required('Required'),
      agree: Yup.boolean().oneOf([true], 'Required')
    }),
    onSubmit: (values) => {
      console.log(values)
      alert('Submitted ✅')
      onClose()
    }
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-3">

      {/* Modal Box */}
      <div className="bg-gray-100 w-full max-w-sm sm:max-w-md rounded-xl p-4 sm:p-6 relative">

        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-600 text-lg"
        >
          <FaTimes />
        </button>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-700">
          Get Quick Enquiry
        </h2>

        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2 mb-4"></div>

        <form onSubmit={formik.handleSubmit} className="space-y-3">

          {/* Name */}
          <div>
            <input
              name="name"
              placeholder="Your Name"
              onChange={formik.handleChange}
              className="w-full p-2.5 text-sm bg-gray-200 border rounded-md"
            />
            <p className="text-red-500 text-xs h-4">{formik.errors.name}</p>
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              placeholder="Your Email"
              onChange={formik.handleChange}
              className="w-full p-2.5 text-sm bg-gray-200 border rounded-md"
            />
            <p className="text-red-500 text-xs h-4">{formik.errors.email}</p>
          </div>

          {/* Phone */}
          <div>
            <input
              name="phone"
              placeholder="Your Contact No"
              onChange={formik.handleChange}
              className="w-full p-2.5 text-sm bg-gray-200 border rounded-md"
            />
            <p className="text-red-500 text-xs h-4">{formik.errors.phone}</p>
          </div>

          {/* Date */}
          <div>
            <input
              type="date"
              name="date"
              onChange={formik.handleChange}
              className="w-full p-2.5 text-sm bg-gray-200 border rounded-md"
            />
            <p className="text-red-500 text-xs h-4">{formik.errors.date}</p>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Leave a message"
            rows="2"
            onChange={formik.handleChange}
            className="w-full p-2.5 text-sm bg-gray-200 border rounded-md"
          />

          {/* Checkbox */}
          <div className="flex gap-2 items-start">
            <input 
              type="checkbox" 
              name="agree" 
              onChange={formik.handleChange} 
              className="mt-1"
            />
            <p className="text-xs leading-tight">
              I agree to get SMS/Email/Whatsapp
            </p>
          </div>
          <p className="text-red-500 text-xs h-4">{formik.errors.agree}</p>

          {/* Button */}
          <button className="w-full bg-orange-500 text-white py-2.5 text-sm rounded-md hover:bg-orange-600 transition">
            Send Message
          </button>

        </form>
      </div>
    </div>
  )
}