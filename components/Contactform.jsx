

'use client'
import { sendEmail } from '@/utils/sendEmail'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import { useRef } from 'react'

export default function ContactForm() {

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
      try {
        const params = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          form_type: 'Contact Form',
          ...(values.message && { message: values.message })
        }

        await sendEmail(params)

        alert('Message sent successfully!')
        resetForm()

      } catch (err) {
        console.error(err)
        alert('Failed to send ')
      }
    }
  }
  )

  return (
    <div className="w-full bg-gray-100 border-2 border-black rounded-2xl p-6 flex flex-col">

      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900">
        GET IN TOUCH
      </h2>

      <div className="w-20 h-1 bg-orange-500 mx-auto mt-3 mb-6"></div>

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
              I agree to get SMS/Email/Call from Worship Holidays Representative.
            </p>
          </div>

          <p className="text-red-500 text-sm h-5">{formik.errors.agree}</p>

          {/* 🔒 reCAPTCHA */}
          {/* <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            ref={recaptchaRef}
          /> */}

        </div>

        <button className="w-full bg-orange-500 text-white py-3 rounded mt-4">
          Send Message
        </button>

      </form>
    </div>
  )
}