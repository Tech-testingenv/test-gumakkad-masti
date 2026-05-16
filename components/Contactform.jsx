

'use client'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { sendEmail } from '@/utils/sendEmail'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import { useRef } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  // const recaptchaRef = useRef(null)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      agree: false
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),

      email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),

      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Enter valid number')
        .required('Required'),


    }),


    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      try {
        const response = await fetch('/api/send-enquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.phone,
            form_type: 'Contact Form',
            message: values.message,
          }),
        })

        const resData = await response.json()

        if (resData.success) {
          toast.success('Message sent successfully! ✅')
          resetForm()
        } else {
          toast.error('Failed to send message ❌')
        }

      } catch (err) {
        console.error(err)
        toast.error('Failed to send ❌')
      } finally {
        setLoading(false)
      }
    }
  }
  )

  return (
    <div className="w-full bg-gray-100 border-2 border-black rounded-2xl p-6 flex flex-col">

      <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-900 uppercase">
        GET IN TOUCH
      </h2>

      <div className="w-20 h-1 bg-purple-900 mx-auto mt-3 mb-6"></div>

      <form onSubmit={formik.handleSubmit} className="flex flex-col flex-1 justify-between">

        <div className="space-y-4">

          <div>
            <input
              name="name"
              placeholder="Your Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full p-3 bg-gray-200 border rounded"
            />
            <p className="text-red-500 text-sm h-5">{formik.errors.name}</p>
          </div>

          <div>
            <input
              name="email"
              placeholder="Your Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full p-3 bg-gray-200 border rounded"
            />
            <p className="text-red-500 text-sm h-5">{formik.errors.email}</p>
          </div>

          <div>
            <input
              name="phone"
              placeholder="Your Contact No"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="w-full p-3 bg-gray-200 border rounded"
            />
            <p className="text-red-500 text-sm h-5">{formik.errors.phone}</p>
          </div>

          <textarea
            name="message"
            rows="3"
            placeholder="Leave a message (Optional)"
            onChange={formik.handleChange}
            value={formik.values.message}
            className="w-full p-3 bg-gray-200 border rounded"
          />

          <div className="flex gap-2">
            <input
              type="checkbox"
              name="agree"
              onChange={formik.handleChange}
              checked={formik.values.agree}
            />
            <p className="text-sm">
              I agree to get SMS/Email/Call from Ghumakkar Masti Representative.
            </p>
          </div>

          <p className="text-red-500 text-sm h-5">{formik.errors.agree}</p>

          {/* 🔒 reCAPTCHA */}
          {/* <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            ref={recaptchaRef}
          /> */}

        </div>

        <button 
          disabled={loading}
          className={`w-full bg-purple-900 text-white py-3 rounded mt-4 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

      </form>
    </div>
  )
}