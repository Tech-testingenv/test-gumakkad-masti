'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import EnquiryModal from '@/components/EnquiryModal'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Navbar() {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [packagesDropdown, setPackagesDropdown] = useState(false)
  const [carsDropdown, setCarsDropdown] = useState(false)

  const [openModal, setOpenModal] = useState(false)
  const [selectedSlug, setSelectedSlug] = useState('')

  const router = useRouter()
  const searchParams = useSearchParams()

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen)

  const closeAll = () => {
    setPackagesDropdown(false)
    setCarsDropdown(false)
    setIsNavbarOpen(false)
  }

  const toggleDropdown = (type) => {
    if (type === 'packages') {
      setPackagesDropdown(prev => !prev)
      setCarsDropdown(false)
    } else {
      setCarsDropdown(prev => !prev)
      setPackagesDropdown(false)
    }
  }

  useEffect(() => {
    const modal = searchParams.get('modal')
    if (modal === 'enquiry') {
      setOpenModal(true)
      setSelectedSlug('enquiry')
    }
  }, [searchParams])

  return (
    <>
      {/* FIXED TOP NAVBAR */}
      <div className=" w-full z-50 bg-white lg:bg-transparent shadow-md lg:shadow-none">
        <nav className="px-3 py-2 lg:py-3">

          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" onClick={closeAll} className="flex items-center">
              <Image
                src="/assets/image/logo-new.png"
                alt="Logo"
                width={200}
                height={100}
                className="h-12 md:h-16 lg:h-24 w-auto"
              />
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={toggleNavbar}
              className="lg:hidden p-2"
            >
              <FontAwesomeIcon icon={isNavbarOpen ? faTimes : faBars} className="text-2xl" />
            </button>

            {/* MENU */}
            <div className={`
              absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent
              ${isNavbarOpen ? 'block' : 'hidden'} lg:flex
            `}>

              <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 px-4 lg:px-0 text-sm lg:text-base">

                <li>
                  <Link href="/" onClick={closeAll} className="block py-2 font-semibold lg:text-white">
                    HOME
                  </Link>
                </li>

                <li>
                  <Link href="/about" onClick={closeAll} className="block py-2 font-semibold lg:text-white">
                    ABOUT-US
                  </Link>
                </li>

                {/* PACKAGES */}
                <li
                  className="relative"
                  onMouseEnter={() => setPackagesDropdown(true)}
                  onMouseLeave={() => setPackagesDropdown(false)}
                >
                  <button
                    onClick={() => toggleDropdown('packages')}
                    className="py-2 font-semibold lg:text-white flex items-center gap-1"
                  >
                    PACKAGES <FontAwesomeIcon icon={faCaretDown} />
                  </button>

                  <ul className={`
                    ${packagesDropdown ? 'block' : 'hidden'}
                    lg:absolute bg-gray-200 shadow-lg w-max z-50
                  `}>
                    {[
                      { name: "Kashmir Tour", link: "/kashmir-tours-packages" },
                      { name: "Shimla Manali", link: "/shimla-manali-tour" },
                      { name: "Sikkim Darjeeling", link: "/sikkim-darjeeling-tour" },
                      { name: "Andaman", link: "/andaman-packages" },
                      { name: "Rajasthan", link: "/rajasthan-tour" },
                      { name: "Goa", link: "/goa-tour" },
                      { name: "Golden Triangle", link: "/golden-triangle-tour" },
                    ].map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.link}
                          onClick={closeAll}
                          className="block px-4 py-2 border-b hover:bg-gray-300"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* CARS */}
                <li
                  className="relative"
                  onMouseEnter={() => setCarsDropdown(true)}
                  onMouseLeave={() => setCarsDropdown(false)}
                >
                  <button
                    onClick={() => toggleDropdown('cars')}
                    className="py-2 font-semibold lg:text-white flex items-center gap-1"
                  >
                    CARS <FontAwesomeIcon icon={faCaretDown} />
                  </button>

                  <ul className={`
                    ${carsDropdown ? 'block' : 'hidden'}
                    lg:absolute bg-gray-200 shadow-lg w-max z-50
                  `}>
                    {[
                      { name: "Luxury Cars Fleet", link: "/luxury-cars-fleet" },
                      { name: "SUV / MUV Cars", link: "/suv-muv-cars-fleet" },
                      { name: "Sedan Cars", link: "/sedan-cars-fleet" },
                    ].map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.link}
                          onClick={closeAll}
                          className="block px-4 py-2 border-b hover:bg-gray-300"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <Link href="/contact-us" onClick={closeAll} className="block py-2 font-semibold lg:text-white">
                    CONTACT-US
                  </Link>
                </li>

                {/* ENQUIRY BUTTON */}
                <li className="mt-2 lg:mt-0">
                  <button
                    onClick={() => {
                      closeAll()
                      setSelectedSlug('enquiry')
                      setOpenModal(true)
                      router.push('?modal=enquiry', { scroll: false })
                    }}
                    className="bg-blue-900 text-white px-4 py-2 rounded-lg w-full lg:w-auto"
                  >
                    ENQUIRY
                  </button>
                </li>

              </ul>
            </div>

          </div>
        </nav>
      </div>

      {/* MODAL */}
      <EnquiryModal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false)
          router.back()
        }}
        slug={selectedSlug}
      />
    </>
  )
}