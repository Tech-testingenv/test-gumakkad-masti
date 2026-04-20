import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-[#32064a] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: About */}
        <div>
        <div className="flex items-center gap-3 mb-3">
    <img 
      src="/assets/image/logo-new.png" 
      alt="Ghumakkar Masti Logo" 
      className="w-20 h-20 object-cover"
    />
          <h3 className="text-lg font-bold ">Ghumakkar Masti</h3>
         </div>
          <p className="text-gray-300 text-sm">
            Ghumakkar Masti is a trusted travel company based in Delhi, offering customized holiday packages across India.
            From Kashmir and Ladakh to Kerala and North-East tours, we specialize in religious, cultural, and adventure
            trips. With over 1000 successful trips, we are committed to providing seamless travel experiences and
            top-notch customer satisfaction.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-300 text-lg">
            <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white mr-2" />
              <Link href="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white mr-2" />
              <Link href="/about" className="hover:text-blue-400">About Us</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white mr-2" />
              <Link href="/contact-us" className="hover:text-blue-400">Contact Us</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white mr-2" />
              <Link href="/terms-and-conditions" className="hover:text-blue-400">Terms & Condition</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white mr-2" />
              <Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-lg">
            <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white mr-2" />
              <Link href="/kashmir-tours-packages" className="hover:text-blue-400">Kashmir Tour</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white mr-2" />
              <Link href="/shimla-manali-tour" className="hover:text-blue-400">Shimla Manali Tour</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white mr-2" />
              <Link href="/sikkim-darjeeling-tour" className="hover:text-blue-400">Sikkim Darjeeling Tour</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white mr-2" />
              <Link href="/andaman-packages" className="hover:text-blue-400">Andaman Tour</Link>
            </li>
             <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white mr-2" />
              <Link href="/rajasthan-tour" className="hover:text-blue-400">Rajasthan Tour</Link>
            </li>
             <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white mr-2" />
              <Link href="/goa-tour" className="hover:text-blue-400">Goa Tour</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white mr-2" />
              <Link href="/golden-triangle-tour" className="hover:text-blue-400">Golden Triangle Tour</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <p className="text-gray-300 text-sm flex items-center">
            <span className="mr-2">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <Link href="tel:+919821325561" className="hover:text-blue-400">+91 9821325561</Link>,
            <Link href="tel:+918744878555" className="hover:text-blue-400 ml-1">+91-8744878555</Link>
          </p>
          <p className="text-gray-300 text-sm flex items-center mt-2">
            <span className="mr-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <Link href="mailto:booking@ghumakkarmasti.in" className="hover:text-blue-400">booking@ghumakkarmasti.in</Link>
          </p>
        </div>
      </div>

      {/* Copyright & Developer Info */}
      <div className="bg-[#32064a] text-gray-400 text-sm py-4">
        <div className="max-w-7xl mx-auto px-2 lg:px-6 flex flex-col md:flex-row justify-between text-center md:text-left">
          <p>Copyright © {new Date().getFullYear()} Ghumakkar Masti
            All rights reserved</p>
          <p>Designed and Developed by
            <Link href="https://kanakdrishtiinfo.com/" target="_blank" className="text-blue-400 hover:underline ml-1">Kanak Drishti
              Infotech Pvt. Ltd.</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
