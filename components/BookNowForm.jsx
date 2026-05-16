'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { sendEmail } from '@/utils/sendEmail'

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

  // Traveler Details State
  const [counts, setCounts] = useState({
    adults: 1,
    children: 0,
    pets: 'No'
  })
  const [showDropdown, setShowDropdown] = useState(false)

  const updateCounts = (field, delta) => {
    setCounts(prev => ({
      ...prev,
      [field]: Math.max(0, prev[field] + delta)
    }))
  }

  const handleApply = () => {
    const travelerString = `Travellers: ${counts.adults}, Children: ${counts.children}, Pets: ${counts.pets}`
    setForm(prev => ({ ...prev, travelers: travelerString }))
    setShowDropdown(false)
  }

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

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

  // SUBMIT (FINAL MERGED)
  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setLoading(true)

    try {
      const finalData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        destination: form.destination,
        date: form.date,
        travelers: form.travelers,
        pickup: form.pickup,
        message: form.message,
      }

      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...finalData,
          form_type: 'Booking Form',
        }),
      })

      const resData = await response.json()

      if (resData.success) {
        toast.success('Booking sent successfully ✅')
        // RESET FORM
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
      } else {
        toast.error('Failed to send booking ❌')
      }

    } catch (err) {
      console.error(err)
      toast.error('Failed ❌')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-xl shadow-lg p-4 sm:p-6 bg-white w-full">

        <h2 className="bg-purple-900 text-white text-center py-2 rounded mb-4 text-sm sm:text-base font-bold uppercase min-h-[40px] flex items-center justify-center px-2">
          {form.destination || "Let’s Plan Your Trip"}
        </h2>

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
          <div className="relative">
            <div 
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full border p-2 rounded cursor-pointer text-gray-500 bg-white text-sm sm:text-base"
            >
              {form.travelers || "Number of Travelers"}
            </div>

            {showDropdown && (
              <div className="absolute top-full left-0 w-full bg-white border shadow-xl rounded-lg p-4 z-50 mt-1 space-y-4">
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="font-medium">Travellers</span>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => updateCounts('adults', -1)} className="w-8 h-8 rounded-full border border-purple-900 text-purple-900 flex items-center justify-center">-</button>
                    <span>{counts.adults}</span>
                    <button type="button" onClick={() => updateCounts('adults', 1)} className="w-8 h-8 rounded-full border border-purple-900 text-purple-900 flex items-center justify-center">+</button>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="font-medium">Children</span>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => updateCounts('children', -1)} className="w-8 h-8 rounded-full border border-purple-900 text-purple-900 flex items-center justify-center">-</button>
                    <span>{counts.children}</span>
                    <button type="button" onClick={() => updateCounts('children', 1)} className="w-8 h-8 rounded-full border border-purple-900 text-purple-900 flex items-center justify-center">+</button>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="font-medium">Pets</span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" name="pets" checked={counts.pets === 'Yes'} onChange={() => setCounts(p => ({...p, pets: 'Yes'}))} className="accent-purple-900" /> Yes
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" name="pets" checked={counts.pets === 'No'} onChange={() => setCounts(p => ({...p, pets: 'No'}))} className="accent-purple-900" /> No
                    </label>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={handleApply}
                  className="w-full bg-purple-900 text-white py-2 rounded-lg font-bold hover:bg-purple-800 transition"
                >
                  Apply
                </button>
              </div>
            )}
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

          {/* Message */}
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
            disabled={loading}
            className={`w-full bg-purple-900 text-white py-2 rounded hover:bg-purple-800 transition text-sm sm:text-base ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Processing...' : 'Book Now'}
          </button>

        </form>
      </div>
    </div>
  )
}