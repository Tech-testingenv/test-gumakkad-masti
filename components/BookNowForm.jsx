'use client'

import { useState } from 'react'

export default function BookNowForm({ packageName = "" }) {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: packageName || '',
    date: '',
    travelers: '',
    pickup: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  // HANDLE CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // VALIDATION
  const validate = () => {
    let newErrors = {}

    if (!form.name.trim()) newErrors.name = "Name is required"

    if (!form.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email"
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required"
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit number"
    }

    if (!form.destination) newErrors.destination = "Destination required"
    if (!form.date) newErrors.date = "Select travel date"
    if (!form.travelers) newErrors.travelers = "Enter travelers"
    if (!form.pickup.trim()) newErrors.pickup = "Pickup location required"

    return newErrors
  }

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})

    const finalData = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      destination: form.destination,
      date: form.date,
      travelers: form.travelers,
      pickup: form.pickup,
      message: form.message, // optional
    }

    console.log("BOOKING DATA:", finalData)

    alert("Booking Submitted Successfully ✅")

    // RESET
    setForm({
      name: '',
      email: '',
      phone: '',
      destination: packageName || '',
      date: '',
      travelers: '',
      pickup: '',
      message: '',
    })
  }

  return (
    <div className="w-full max-w-md mx-auto">
     <div className=" rounded-xl shadow-lg p-4 sm:p-6 bg-white w-full ">

      <h2 className="bg-blue-900 text-white text-center py-2 rounded mb-4 text-sm sm:text-base font-semibold">
Let’s Plan Your Trip      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-2 rounded text-sm sm:text-base"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border p-2 rounded text-sm sm:text-base"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="w-full border p-2 rounded text-sm sm:text-base"
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
        </div>

        {/* Destination */}
        <div>
          <input
            type="text"
            name="destination"
            value={form.destination}
            readOnly
            className="w-full border p-2 rounded bg-gray-100 text-sm sm:text-base"
          />
          {errors.destination && <p className="text-red-500 text-xs">{errors.destination}</p>}
        </div>

        {/* Date */}
        <div>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border p-2 rounded text-sm sm:text-base"
          />
          {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
        </div>

        {/* Travelers */}
        <div>
          <input
            type="number"
            name="travelers"
            value={form.travelers}
            onChange={handleChange}
            placeholder="Number of Travelers"
            className="w-full border p-2 rounded text-sm sm:text-base"
          />
          {errors.travelers && <p className="text-red-500 text-xs">{errors.travelers}</p>}
        </div>

        {/* Pickup */}
        <div>
          <input
            type="text"
            name="pickup"
            value={form.pickup}
            onChange={handleChange}
            placeholder="Pickup Location"
            className="w-full border p-2 rounded text-sm sm:text-base"
          />
          {errors.pickup && <p className="text-red-500 text-xs">{errors.pickup}</p>}
        </div>

        {/* Message OPTIONAL */}
        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Special Request (Optional)"
            className="w-full border p-2 rounded text-sm sm:text-base"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-700 transition text-sm sm:text-base"
        >
          Book Now
        </button>

      </form>
    </div>
   </div>
  )
}