'use client'

import { useState, useEffect } from 'react'

export default function EnquiryForm({
  type = "package",
  carName = "",
  destinationName = "",
  showCarFields = false,
}) {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: destinationName || '',
    date: '',
    travelers: '',
    packageType: '',
    car: carName || '',
    duration: '',
    pickup: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  // ✅ AUTO UPDATE when props change
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      destination: destinationName || '',
      car: carName || '',
    }))
  }, [destinationName, carName])

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
      newErrors.phone = "Contact number is required"
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit number"
    }

    if (!form.pickup.trim()) {
      newErrors.pickup = "Pickup location required"
    }

    if (!form.date) newErrors.date = "Select date"

    if (type === "package") {
      if (!form.destination) newErrors.destination = "Destination missing"
      if (!form.travelers) newErrors.travelers = "Enter travelers"
      if (!form.packageType) newErrors.packageType = "Select package type"
    }

    if (type === "car" && showCarFields) {
      if (!form.car) newErrors.car = "Car missing"
      if (!form.duration) newErrors.duration = "Select duration"
    }

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

    let finalData = {}

    if (type === "package") {
      finalData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        destination: form.destination,
        pickup: form.pickup,
        date: form.date,
        travelers: form.travelers,
        packageType: form.packageType,
        message: form.message,
      }
    } else if (type === "car" && showCarFields) {
      finalData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        car: form.car,
        pickup: form.pickup,
        date: form.date,
        duration: form.duration,
        message: form.message,
      }
    } else {
      finalData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        pickup: form.pickup,
        date: form.date,
        message: form.message,
      }
    }

    console.log("Submitted Data:", finalData)

    alert("Form submitted successfully ✅")

    // RESET (destination stays auto-filled)
    setForm({
      name: '',
      email: '',
      phone: '',
      destination: destinationName || '',
      date: '',
      travelers: '',
      packageType: '',
      car: carName || '',
      duration: '',
      pickup: '',
      message: '',
    })
  }

  return (
    <div className="border-2 border-purple-900 rounded-lg shadow p-4 sm:p-5 bg-white w-full">

      <h3 className="bg-purple-900 text-white text-center py-2 rounded mb-4">
        Get Quick Enquiry
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3">

        {/* Name */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border p-2 rounded"
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

        {/* Email */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

        {/* Phone */}
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Your Contact No"
          className="w-full border p-2 rounded"
        />
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

        {/* Pickup */}
        <input
          type="text"
          name="pickup"
          value={form.pickup}
          onChange={handleChange}
          placeholder="Pickup Location"
          className="w-full border p-2 rounded"
        />
        {errors.pickup && <p className="text-red-500 text-xs">{errors.pickup}</p>}

        {/* PACKAGE */}
        {type === "package" && (
          <>
            {/* AUTO FILLED DESTINATION */}
            <input
              type="text"
              name="destination"
              value={form.destination}
              readOnly
              className="w-full border p-2 rounded bg-gray-100"
            />

            <input
              type="number"
              name="travelers"
              value={form.travelers}
              onChange={handleChange}
              placeholder="Number of Travelers"
              className="w-full border p-2 rounded"
            />
            {errors.travelers && <p className="text-red-500 text-xs">{errors.travelers}</p>}

            <select
              name="packageType"
              value={form.packageType}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Package Type</option>
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Luxury</option>
            </select>
            {errors.packageType && <p className="text-red-500 text-xs">{errors.packageType}</p>}
          </>
        )}

        {/* CAR */}
        {type === "car" && showCarFields && (
          <>
            <input
              type="text"
              value={form.car}
              readOnly
              className="w-full border p-2 rounded bg-gray-100"
            />

            <select
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Duration</option>
              <option>4 Hours</option>
              <option>8 Hours</option>
              <option>Full Day</option>
              <option>Outstation</option>
            </select>
            {errors.duration && <p className="text-red-500 text-xs">{errors.duration}</p>}
          </>
        )}

        {/* Date */}
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}

        {/* Message */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Special Request (Optional)"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-purple-900 text-white py-2 rounded hover:bg-purple-800"
        >
          Send Enquiry
        </button>

      </form>
    </div>
  )
}