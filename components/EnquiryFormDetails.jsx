'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

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

  // Traveler Details State
  const [counts, setCounts] = useState({
    adults: 1,
    children: 0,
    pets: 'No'
  })
  const [showDropdown, setShowDropdown] = useState(false)
  const [showPackageDropdown, setShowPackageDropdown] = useState(false)
  const [showDurationDropdown, setShowDurationDropdown] = useState(false)

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

  // AUTO UPDATE
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

    if (!form.pickup.trim()) newErrors.pickup = "Pickup location required"
    if (!form.date) newErrors.date = "Select date"

    if (type === "package") {
      if (!form.travelers) newErrors.travelers = "Enter travelers"
      if (!form.packageType) newErrors.packageType = "Select package type"
    }

    if (type === "car" && showCarFields) {
      if (!form.duration) newErrors.duration = "Select duration"
    }

    return newErrors
  }

  // ✅ FINAL SUBMIT (UPDATED TO USE WEBMAIL API)
  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setLoading(true)

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
    } 
    else if (type === "car" && showCarFields) {
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
    } 
    else {
      finalData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        pickup: form.pickup,
        date: form.date,
        message: form.message,
      }
    }

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...finalData,
          form_type: type === 'car' ? 'Car Enquiry' : 'Package Enquiry',
        }),
      })

      const resData = await response.json()

      if (resData.success) {
        toast.success("Enquiry sent successfully ✅")
        // RESET
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
      } else {
        toast.error('Failed to send enquiry ❌')
      }

    } catch (err) {
      console.error(err)
      toast.error('Failed to send ❌')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="border-2 border-purple-900 rounded-lg shadow p-4 sm:p-5 bg-white w-full">

      <h3 className="bg-purple-900 text-white text-center py-2 rounded mb-4 font-bold uppercase min-h-[40px] flex items-center justify-center">
        {type === "package" 
          ? (form.destination || "Get Quick Enquiry") 
          : (type === "car" ? (form.car || "Car Enquiry") : "Get Quick Enquiry")}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full border p-2 rounded" />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="w-full border p-2 rounded" />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

        <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Your Contact No" className="w-full border p-2 rounded" />
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

        <input type="text" name="pickup" value={form.pickup} onChange={handleChange} placeholder="Pickup Location" className="w-full border p-2 rounded" />
        {errors.pickup && <p className="text-red-500 text-xs">{errors.pickup}</p>}

        {type === "package" && (
          <>
            <div className="relative">
              <div 
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full border p-2 rounded cursor-pointer text-gray-500 bg-white"
              >
                {form.travelers || "Number of Travelers"}
              </div>

              {showDropdown && (
                <div className="absolute top-full left-0 w-full bg-white border shadow-xl rounded-lg p-4 z-50 mt-1 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Travellers</span>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => updateCounts('adults', -1)} className="w-8 h-8 rounded-full border border-purple-900 text-purple-900 flex items-center justify-center">-</button>
                      <span>{counts.adults}</span>
                      <button type="button" onClick={() => updateCounts('adults', 1)} className="w-8 h-8 rounded-full border border-purple-900 text-purple-900 flex items-center justify-center">+</button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium">Children</span>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => updateCounts('children', -1)} className="w-8 h-8 rounded-full border border-purple-900 text-purple-900 flex items-center justify-center">-</button>
                      <span>{counts.children}</span>
                      <button type="button" onClick={() => updateCounts('children', 1)} className="w-8 h-8 rounded-full border border-purple-900 text-purple-900 flex items-center justify-center">+</button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
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
            </div>
            {errors.travelers && <p className="text-red-500 text-xs">{errors.travelers}</p>}

            <div className="relative">
              <div 
                onClick={() => setShowPackageDropdown(!showPackageDropdown)}
                className="w-full border p-2 rounded cursor-pointer text-gray-500 bg-white"
              >
                {form.packageType || "Select Package Type"}
              </div>

              {showPackageDropdown && (
                <div className="absolute top-full left-0 w-full bg-white border shadow-xl rounded-lg z-50 mt-1 overflow-hidden">
                  {["Standard", "Deluxe", "Luxury"].map((type) => (
                    <div 
                      key={type}
                      onClick={() => {
                        setForm({...form, packageType: type})
                        setShowPackageDropdown(false)
                      }}
                      className="p-3 hover:bg-purple-900 hover:text-white cursor-pointer transition"
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {errors.packageType && <p className="text-red-500 text-xs">{errors.packageType}</p>}
          </>
        )}

        {type === "car" && showCarFields && (
          <>
            <div className="relative">
              <div 
                onClick={() => setShowDurationDropdown(!showDurationDropdown)}
                className="w-full border p-2 rounded cursor-pointer text-gray-500 bg-white"
              >
                {form.duration || "Select Duration"}
              </div>

              {showDurationDropdown && (
                <div className="absolute top-full left-0 w-full bg-white border shadow-xl rounded-lg z-50 mt-1 overflow-hidden">
                  {["4 Hours", "8 Hours", "Full Day", "Outstation"].map((dur) => (
                    <div 
                      key={dur}
                      onClick={() => {
                        setForm({...form, duration: dur})
                        setShowDurationDropdown(false)
                      }}
                      className="p-3 hover:bg-purple-900 hover:text-white cursor-pointer transition"
                    >
                      {dur}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {errors.duration && <p className="text-red-500 text-xs">{errors.duration}</p>}
          </>
        )}

        <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full border p-2 rounded" />
        {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}

        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Special Request (Optional)" className="w-full border p-2 rounded" />

        <button 
          type="submit" 
          disabled={loading}
          className={`w-full bg-purple-900 text-white py-2 rounded hover:bg-purple-800 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Sending...' : 'Send Enquiry'}
        </button>

      </form>
    </div>
  )
}